import NextAuth, {User, DefaultSession} from "next-auth";

declare module "next-auth" {

    interface User {
        profile?:{
            id:string,
        } & User["user"]
    }
    
    interface Session {
        user?:{
            profileId?:string,
        } & DefaultSession["user"]
    }

}