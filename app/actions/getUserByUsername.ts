import { getConnection, releaseConnection } from "@/app/libs/db/mysql";
import { find_user_mst_by_username, select_user_mst } from "../libs/db/sql/users/user_mst";
import { SafeUser } from "../types";


type Props =  {
  username: string;
}

// カテゴリーリスト取得する
export default async function getUserByUsername(params: Props) {
  const connection = await getConnection();
  try {
    const user = await find_user_mst_by_username(connection, params.username);
    if (!user) {
      return null;
    }
    return user[0];
  } catch (error: any) {
    console.log("getUserByUsername" + error);
    return null;
  } finally {
    releaseConnection(connection);
  }
}
