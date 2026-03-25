import clientPromise from "@/lib/mongoClient";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcrypt"
import dbConnect from "@/lib/dbConnect"
import userModel from "@/models/user"
import { User } from "next-auth";
import { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = ({
  adapter: MongoDBAdapter(clientPromise),

  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {

        identifier: { label: "Email or username", type: "text" },
        password: { label: "Password", type: "password" },
      },

      async authorize(
          credentials: Record<"identifier" | "password", string> | undefined
        ): Promise<User | null> {

          if (!credentials) return null

          await dbConnect()

          const user = await userModel.findOne({
            $or: [
              { email: credentials.identifier },
              { username: credentials.identifier },
            ],
          })

          if (!user) return null

          const isPassword = await bcrypt.compare(
            credentials.password,
            user.password
          )

          if (!isPassword) return null

          return {
            id: user._id.toString(),
            email: user.email,
            username: user.username, // ✅ FIXED
          }
      },
    }),

    GitHubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),

    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      allowDangerousEmailAccountLinking: true,
    }),
  ],
  callbacks:{
              async signIn({ user, account }) {
              return true
            },
            async jwt({token , user}){
                if(user){
                    token._id = user._id?.toString();
                    token.isVerified = user.isVerified;
                    token.username = user.username;
                }
                return token;
            },
            // this will run when data is used in frontend
            async session({token , session}){
                if(token){
                    session.user._id = token._id as string;
                    session.user.isVerified = token.isVerified as boolean;
                    session.user.username = token.username as string;
                }
                return session;
            },
      },

  session: { strategy: "jwt" },

  pages: {
    signIn: "/signin",
    error: "/signin",
  },
})

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }