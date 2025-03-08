import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

import User from './../../../../models/user';
import { connectToDB } from './../../../../utils/database';

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    })
  ],
  callbacks: {
    async session({ session }) {
      try {
        const sessionUser = await User.findOne({ email: session.user?.email });
        
        if (!sessionUser) {
          throw new Error('Session user not found');
        }

        session.user.id = sessionUser._id.toString();
        return session;
      } catch (error) {
        console.error('Session error:', error);
        return session;
      }
    },
    async signIn({ profile }) {
      try {
        await connectToDB();

        if (!profile?.email) {
          throw new Error('No email provided');
        }

        // check if user already exists
        const userExists = await User.findOne({ email: profile.email });

        // if not, create a new document and save user in MongoDB
        if (!userExists) {
          await User.create({
            email: profile.email,
            username: profile.name?.replace(/\s+/g, '').toLowerCase() || '',
            image: profile.picture || profile.image,
            name: profile.name || '',
          });
        }

        return true;
      } catch (error) {
        console.error("Error in signIn:", error);
        return false;
      }
    },
  },
  pages: {
    signIn: '/auth/signin',
    error: '/auth/error',
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };