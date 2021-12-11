import NextAuth from "next-auth"
import GoogleProvider from 'next-auth/providers/google';
import React from 'react';
export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.SECRET,
  
    }),
    // ...add more providers here
  ],
 
})