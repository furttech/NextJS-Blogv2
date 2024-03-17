'use server'

import { Profile, User } from "@prisma/client";
import prisma from "./prisma";
import { auth } from "@/auth";

/**
 * 
 * @returns current user session ID
 */
export async function userSessionId(){
    
  const session = await auth();
    
    if(session && session.user){
      const id = session.user.id;
      //console.log('session: '+ id);
      return id;
    }else{
      return "0";
    }
    
}

/**
 * 
 * @returns current user session ID
 */
export async function userSessionUserName(){
  const session = await auth();
  const name = session?.user?.name;
  return name;
}

/**
 * 
 * @returns current user session ID
 */
export async function userSessionIcon(){
  const session = await auth();
  const img = session?.user?.image;
  return img;
}

/**
 * 
 * @returns current user session ID
 */
export async function userSessionEmail(){
  
  const session = await auth();

  if( session && session.user){
    const email = session.user.email;
    return email;
  }else{
    return "user@email.com";
  }


}

/**
 * 
 * @param email login form user submitted email 
 * @returns 
 * 
 *  finds user:   User type object containing user information as User Type
 */
export async function fetchUserByEmail( email:string ): Promise<User|undefined> {

  // attempt to fetch user or throw error
  try {
    const user: ( User | null ) = await prisma.user.findUnique({
        where: {
          email: email,
        }
    });

    if(!user){
        throw new Error('User Does Not Exist!');
    }

    return user;

  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Fetched By Email Failed.');
  }
}

export async function fetchUserProfile( uId:string ): Promise<Profile|undefined> {

  // attempt to fetch user or throw error
  try {
    const profile: ( Profile | null ) = await prisma.profile.findUnique({
        where: {
          userId: uId,
        }
    });

    if(!profile){
        throw new Error('User Does Not Exist!');
    }

    return profile;

  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Fetched By Email Failed.');
  }
}


/**
 * 
 * @param userId user id provided from session details
 * @returns 
 * 
 *  finds user:  User type object containing user information as User Type
 */
export async function fetchUserById( userId: string | undefined ): Promise< User | undefined >{

  // attempt to fetch user or throw error
  try{

    if(userId === null){
      throw new Error('UserId is null : Query Failed!');
    }

    const user: ( User | null ) = await prisma.user.findUnique({
      where: {
        id: userId,
      }
    });
    
    if(!user){
      throw new Error('User Does Not Exist');
    }

    return user;

  } catch(error){
    console.error('Failed to fetch user:', error);
    throw new Error('Fetch By Id Failed.');
  }
}