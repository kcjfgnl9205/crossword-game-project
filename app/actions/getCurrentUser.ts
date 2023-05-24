import { getConnection, releaseConnection } from "@/app/libs/db/mysql";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { fint_user_mst_by_username } from "../libs/db/sql/users/user_mst";


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

    const currentUser = await fint_user_mst_by_username(connection, session.user.name);
    if (!currentUser[0]) {
      return null;
    }

    return {
      ...currentUser[0],
      createdAt: currentUser[0].created_at,
      updatedAt: currentUser[0].updated_at,
    };
  } catch (error: any) {
    return null;
  } finally {
    releaseConnection(connection);
  }
}
