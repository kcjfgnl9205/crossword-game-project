import { excuteQuery, getConnection, releaseConnection } from "@/app/libs/db/mysql";
import { LangType } from "@/app/types";
import { SELECT_LANG_MST } from "@/app/libs/db/sql/category";


// 言語リスト取得する
export default async function getLangs(): Promise<Array<LangType>> {
  const connection = await getConnection();
  try {
    return await excuteQuery(connection, SELECT_LANG_MST, []);
  } catch (error: any) {
    console.log("getLangs" + error);
    return [];
  } finally {
    releaseConnection(connection);
  }
}
