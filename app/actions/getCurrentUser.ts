import { excuteQuery, getConnection, releaseConnection } from "@/app/libs/db/mysql";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { SELECT_USER_BY_USERNAME } from "@/app/libs/db/sql/user";


export async function getSession() {
  return await getServerSession(authOptions);
}

export default async function getCurrentUser() {
  const connection = await getConnection();
  try {
    const session = await getSession();
    if (!session?.user?.name) {
      return null;
    }

    const currentUser = await excuteQuery(connection, SELECT_USER_BY_USERNAME, [session.user.name])
    if (!currentUser[0]) {
      return null;
    }

    return {
      ...currentUser[0],
      createdAt: currentUser[0]?.created_at,
      updatedAt: currentUser[0]?.updated_at,
    };
  } catch (error: any) {
    return null;
  } finally {
    releaseConnection(connection);
  }
}
