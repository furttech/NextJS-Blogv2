'use server'

import { redirect } from "next/navigation";
import { userSessionId } from "./userActions";

export async function userProfileNav(){

    //const userId = await userSessionId();

    redirect(`/blog/user/edit/`);

}