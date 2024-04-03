'use server'

import { redirect } from "next/navigation";
import { z } from "zod";
import bcrypt from 'bcrypt';
import { fetchUserByEmail, userSessionEmail, userSessionId } from "../userActions";

const CreateEmail = z.object({
  email: z.string({
    required_error: 'Email is required.',
    invalid_type_error: 'Please enter a Valid email.'
  }).email({ message: "Enter a Valid Email." }),
  password: z.string({
    required_error: 'Password is Required',
    invalid_type_error: 'Invalid Password'
  }).min(10, { message: 'Minimum Length : 10' }),
})

const CreatePassWord = z.object({
  ver_password: z.string({
    required_error: 'Password is Required',
    invalid_type_error: 'Invalid Password'
  }).min(10, { message: 'Minimum Length : 10' }),
  password: z.string({
    required_error: 'Password is Required',
    invalid_type_error: 'Invalid Password'
  }).min(10, { message: 'Minimum Length : 10' }),
  cmp_password: z.string({
    required_error: 'Password is Required',
    invalid_type_error: 'Invalid Password'
  }).min(10, { message: 'Minimum Length : 10' }),
}).refine((data)=> data.password === data.cmp_password,{
  message:"Passwords Do Not Match",
  path: ['cmp_password'],
}).refine((data)=> data.ver_password != data.password,{
  message:"Password Must Be Different",
  path: ['password'],
});;


// temp state
export type State1 = {
  errors?: {
    ver_password?: string[];
    password?: string[];
    cmp_password?: string[];
  };
  message?: string | null;
}

export type State2 = {
  errors?: {
    email?: string[];
    password?: string[];
  };
  message?: string | null;
}



const verifyPassWord = async ({password}:{password:string;}) => {

  try {


    return{
      errors:{},
      message:""
    };
  } catch (error) {
    console.error('Password Error : Failed', error);
    throw new Error('Password Error : Failed.');
  }

}


export async function updatePassWord(prevState: State1, formData: FormData) {

  const uid = await userSessionId();

  const validateFields = CreatePassWord.safeParse({
    ver_password: formData.get('ver_password'),
    password: formData.get('password'),
    cmp_password: formData.get('cmp_password'),
  });

  if (!validateFields.success) {
    return {
      errors: validateFields.error.flatten().fieldErrors,
      message: 'Invalid Entries : Please Retry',
    }
  }

  try {

    const user = await prisma?.user.findUnique({
      where: { id: uid }
    })

    // User Validation Check : Existing Password 
    const passwordMatch = await bcrypt.compare(validateFields.data.ver_password, user?.password!);

    // Encrypt Provided Alternate Password
    const bcPassword: string = await bcrypt.hash(validateFields.data.password, 12);

    if (passwordMatch) {
      const result = await prisma?.user.update({
        where: { id: uid },
        data: {
          password: bcPassword,
        }
      })
    }else{
      return {
         message: "User Validation : Failed"
      };
    }

  } catch (error) {
    console.error('Password Change Error : Failed', error);
    throw new Error('Password Change Error : Failed.');
  }

  return {
    error: "",
    message: "PassWord Updated Successfully"
  };
}

export async function updateEmail(prevState: State2, formData: FormData) {

  const userEmail = await userSessionEmail();

  const validateFields = CreateEmail.safeParse({
    email: formData.get('email'),
    password:formData.get('password')
  });

  if (!validateFields.success) {
    return {
      errors: validateFields.error.flatten().fieldErrors,
      message: 'Invalid Entries : Please Retry',
    }
  } else if (userEmail === validateFields.data.email) {
    return {
      message: 'Must User Alternate Email : Please Retry',
    }
  }

  try {

    // Optional Secondary Validation Buffer 
    const uEx = true;

    // Check DataBase For Previously Registered Email
    const eEx = await fetchUserByEmail(validateFields.data.email);

    if ((eEx || uEx)) {
      console.log("yeas we got here! : but it failed!");
      return ({
        message: "Email Already Exist!",
      })
    }

    // Persist Email Change to Database
    const result = await prisma?.user.update({
      where: { email: userEmail },
      data: { email: validateFields.data.email }
    })

  } catch (error) {
    console.error('Email Change Error : Failed', error);
    throw new Error('Email Change Error : Failed.');
  }

  return {
    error: "",
    message: "PassWord Updated Successfully"
  };

}

export async function userProfileNav() {

  //const userId = await userSessionId();

  redirect(`/blog/user/profile/`);

}

export async function userPassNav() {

  //const userId = await userSessionId();

  redirect(`/blog/user/credentials/?show=pass`);

}
export async function userEmailNav() {

  //const userId = await userSessionId();

  redirect(`/blog/user/credentials/?show=email`);

}