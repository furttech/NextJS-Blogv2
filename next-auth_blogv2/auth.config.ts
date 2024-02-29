
import type { NextAuthConfig } from "next-auth";

export const authConfig = {
    pages: {
        newUser: '/register',
        signIn: '/login',
    },
    session: {
        strategy: 'jwt',
    },
    callbacks: {
        authorized({ auth, request: {nextUrl} }){
            const isLoggedIn = !!auth?.user;
            const isOnFeed = nextUrl.pathname.startsWith('/blog');
            
            if(isOnFeed){
                console.log("is on feed check!")
                return isLoggedIn;

            } else if (isLoggedIn){
                console.log("is logged in checked!")
                return Response.redirect(new URL('/blog', nextUrl));
            }
        },
        session({session,token}){
          
            if(session.user){
                if(token.email){
                    session.user.email = token.email;
                }
                session.user.name = token.name;
                session.user.image = token.picture;
                session.user.id = token.id as string; 
                //session.user.profileId = token.profileId as string;
            }
            return session;
        },
        jwt({ token, user}) {
            // Persist the OAuth access_token to the token right after signin
            if (user) {
                token.id = user.id;
                //token.profileId = user.profile.id;
            }
            
            return token;
        }
    },
    providers: []
} satisfies NextAuthConfig;

