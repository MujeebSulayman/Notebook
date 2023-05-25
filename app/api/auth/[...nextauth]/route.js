import nextAuth from "next-auth";
import GoogleProvider from 'next-auth/providers/google'
import { signIn } from "next-auth/react";

const handler = nextAuth({
    providers: [
        GoogleProvider({
            clientID: '',
            clientSecret: '',
        })
    ],
    async session({ session }) {

    },
    async signIn({ profile }) {

    }
})

export { handler as GET, handler as POST }