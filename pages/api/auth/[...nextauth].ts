import { getConnection } from "@/app/libs/db/mysql";
import { fint_user_mst_by_username } from "@/app/libs/db/sql/users/user_mst";

import bcrypt from "bcrypt";
import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";


export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        username: { label: 'username', type: 'text' },
        password: { label: 'password', type: 'password' }
      },
      async authorize(credentials: Record<"username" | "password", string> | undefined): Promise<any> {
        const connection = await getConnection();
        if (!credentials?.username || !credentials?.password) {
          throw new Error('Invalid credentials');
        }

        const user = await fint_user_mst_by_username(connection, credentials.username); 

        if (!user[0] || !user[0]?.password) {
          throw new Error('Invalid credentials');
        }

        const isCorrectPassword = await bcrypt.compare(
          credentials.password,
          user[0].password
        );

        if (!isCorrectPassword) {
          throw new Error('Invalid credentials');
        }
        
        return {
          ...user[0],
          name: user[0].username,
        };
      }
    })
  ],
  pages: {
    signIn: '/',
  },
  debug: process.env.NODE_ENV === 'development',
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  
}

export default NextAuth(authOptions);
