import nextAuth from "next-auth";
import GoogleProvider from 'next-auth/providers/google'
import { signIn } from "next-auth/react";
import { connectToDB } from "@utlis/database";

const handler = nextAuth({
    providers: [
        GoogleProvider({
            clientID: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
    ],
    async session({ session }) {

    },
    async signIn({ profile }) {
        try {
            await connectToDB()
            // is Uset Signed In

            // If not logged in
            return true

        } catch (error) {
            console.log(error);
            return false
        }
    }
})

export { handler as GET, handler as POST }