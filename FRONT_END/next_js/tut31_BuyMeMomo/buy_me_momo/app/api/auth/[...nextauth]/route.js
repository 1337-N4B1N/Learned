import NextAuth from 'next-auth'
import GitHubProvider from 'next-auth/providers/github'
import mongoose from 'mongoose'
import User from '../../../../models/User'
import connectDB from '../../../../db/connectDb'
import Payment from "../../../../models/Payment"


// connectDB().catch(err => console.error("Database connection error:", err));

export const authoptions = NextAuth({
  providers: [
    // OAuth authentication providers...
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    }),



  ],
  // cookies: {
  //   sessionToken: {
  //     name: `__Secure-next-auth.session-token`,
  //     options: {
  //       httpOnly: true,
  //       sameSite: 'lax',
  //       path: '/',
  //       secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
  //     },
  //   },
  // },

  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (account.provider == "github") {
        // Check if user already exists in database
        await connectDB()
        const currentUser = await User.findOne({ email:user.email })
        if (!currentUser) {
          // create new account if not found
          const newUser = await  User.create({
            email: user.email,
            username: user.name,
          })
          user.name = newUser.username
          // console.log(`New user created and is ${newUser}`)
          // await newUser.save()

        }

        else {
          user.name = currentUser.username;
          // console.log(`User exists : ${currentUser}`)

        }
        return true; //successful signin
      }
        return false 
    },
    async session({session,user,token}){
        const dbUser=await User.findOne({email:session.user.email}) //Use findOne for a single user
        if(dbUser){
        // console.log(`dbUser is ${dbUser}`)
        session.user.name=dbUser.username
        }
        else{
          // console.log("User not found in the databse")
        }
        return session;
    },
  }
})


export { authoptions as GET, authoptions as POST }