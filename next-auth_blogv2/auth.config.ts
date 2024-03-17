
import type { NextAuthConfig } from "next-auth";


export const authConfig = {
    pages: {
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
                console.log("is on feed check! : Login : %s", isLoggedIn);
                return isLoggedIn;

            } else if (isLoggedIn){
                console.log("login checked!");
                return Response.redirect(new URL('/blog', nextUrl));
            }
        },
        session({session,token}){
            
            console.log("Session Expires: %s",session.expires);

            if(session.user){
                if(token.email){
                    session.user.email = token.email;
                }
                session.user.name = token.name;
                session.user.image = token.picture;
                session.user.id = token.id as string; 
            }
            return session;
        },
        async jwt({ token, user}) {

            // Persist the OAuth access_token to the token right after signin
            if (user) {
                token.id = user.id;
                token.email = user.email;
                token.name = user.name;
            }
            
            return token;
        }
    },
    providers: []
} satisfies NextAuthConfig;

