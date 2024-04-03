'use client';

import { lusitana } from '@/app/_components/fonts';
import {
  AtSymbolIcon,
  KeyIcon,
  UserIcon,
} from '@heroicons/react/24/outline';
import { Button } from '@/app/_components/_nav/button';
import { useFormState } from 'react-dom';
import { registerUser } from '@/app/_actions/_authActions/registerFormActions';
import { RegisterUserForm } from '@/app/_lib/definitions';
import "@/app/(public_zone)/global.css";
import { InputFormControl } from '../_formControl/input-form';
import { PassWordFormControl } from '../_formControl/passWord-input-form';

export default function Form(userDetails: RegisterUserForm) {

  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(registerUser, initialState);

  return (
    <form action={dispatch} className="space-y-3">
      <section className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">

        <InputFormControl
          header={'Please Register to continue'}
          labelName={'username'}
          labelText={'UserName'}
          inputType={'text'}
          defaultValue={userDetails?.username}
          placeHolder={'Enter UserName'}
          aria={'username-error'}
          required={true}
          icon={<UserIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />}
        />
        <div id='username-error' aria-live='polite' aria-atomic='true'>
          {
            state.errors?.username &&
            state.errors.username.map((error: string) => (
              <p className='mt-2 text-sm text-red-500' key={error}>
                {error}
              </p>
            ))
          }
        </div>

        <InputFormControl
          labelName={'email'}
          labelText={'Email'}
          inputType={'email'}
          defaultValue={userDetails?.email}
          placeHolder={'Enter Email'}
          aria={'email-error'}
          required={true}
          icon={<AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />}
        />
        <div id='email-error' aria-live='polite' aria-atomic='true'>
          {
            state.errors?.email &&
            state.errors.email.map((error: string) => (
              <p className='mt-2 text-sm text-red-500' key={error}>
                {error}
              </p>
            ))
          }
        </div>

        <PassWordFormControl
          labelName={'password'}
          labelText={'PassWord'}
          defaultValue={""}
          placeHolder={'Enter PassWord'}
          aria={'pass-error'}
        />
        <div id='pass-error' aria-live='polite' aria-atomic='true'>
          {
            state.errors?.password &&
            state.errors.password.map((error: string) => (
              <p className='mt-2 text-sm text-red-500' key={error}>
                {error}
              </p>
            ))
          }
        </div>

        <PassWordFormControl
          labelName={'cmp_password'}
          labelText={'Re-Enter PassWord'}
          defaultValue={""}
          placeHolder={'Verify PassWord'}
          aria={'cmp-pass-error'}
        />
        <div id='cmp-pass-error' aria-live='polite' aria-atomic='true'>
          {
            state.errors?.password &&
            state.errors.password.map((error: string) => (
              <p className='mt-2 text-sm text-red-500' key={error}>
                {error}
              </p>
            ))
          }
        </div>
      </section>
      <Button type='submit' aria-describedby='sub-error' >Register</Button>
      <div className=' text-red-500' id='sub-error' aria-live='polite' aria-atomic='true'>
        {
          state?.message
        }
      </div>
    </form >
  );
}