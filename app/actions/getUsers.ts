import { getConnection, releaseConnection } from "@/app/libs/db/mysql";
import { select_user_mst } from "../libs/db/sql/users/user_mst";
import { SafeUser } from "../types";


// カテゴリーリスト取得する
export default async function getUsers(): Promise<Array<SafeUser>> {
  const connection = await getConnection();
  try {
    return await select_user_mst(connection);
  } catch (error: any) {
    console.log("getUsers" + error);
    return [];
  } finally {
    releaseConnection(connection);
  }
}
