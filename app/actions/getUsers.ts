import { excuteQuery, getConnection, releaseConnection } from "@/app/libs/db/mysql";
import { SafeUser } from "@/app/types";
import { SELECT_USER_MST } from "../libs/db/sql/user";


// カテゴリーリスト取得する
export default async function getUsers(): Promise<Array<SafeUser>> {
  const connection = await getConnection();
  try {
    return await excuteQuery(connection, SELECT_USER_MST, []);
  } catch (error: any) {
    console.log("getUsers" + error);
    return [];
  } finally {
    releaseConnection(connection);
  }
}
