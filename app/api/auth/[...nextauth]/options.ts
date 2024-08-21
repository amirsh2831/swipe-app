import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"
import { PrismaClient } from '@prisma/client'
import { PrismaAdapter } from "@auth/prisma-adapter";
import type { Adapter } from 'next-auth/adapters';
import bcrypt from 'bcrypt'
const prisma = new PrismaClient()

export const options: NextAuthOptions = {
    adapter: PrismaAdapter(prisma) as Adapter,
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        CredentialsProvider({
            name: "signin",
            credentials: {
                email: { label: "Email", type: "text ", placeholder: "jsmith@example.com" },
                password: {  label: "Password", type: "password" }
            },
            async authorize(credentials) {
                 // check to see if email and password is there
                 if(!credentials?.email || !credentials?.password) {
                    throw new Error('Please enter an email and password')
                }

                // check to see if user exists
                const user = await prisma.user.findUnique({
                    where: {
                        email: credentials?.email
                    }
                });

                // if no user was found 
                if (!user || !user?.password) {
                    throw new Error('No user found')
                }
                const passwordsMatch = await bcrypt.compare(credentials.password, user.password)

                // check to see if password matches
                // if password does not match
                if (!passwordsMatch) {
                    throw new Error('Incorrect password')
                }

                return user;
            }    
        })
    ],
    session: {
        strategy: "jwt",
    },
    jwt: {
        secret: "WsYn8bSa8XCEKC5fiiYUDSVFfAU246UfRtVrhBKHyck=",
        // encryption: true,
    },
    pages: {
        signIn: "/LogIn"
    },

    debug: process.env.NODE_ENV === "development",
}