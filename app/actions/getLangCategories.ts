import { getConnection, releaseConnection } from "@/app/libs/db/mysql";
import { select_lang_mst } from "../libs/db/sql/category/lang_mst";
import { CategoryType } from "../types";


export default async function getLangCategories(): Promise<Array<CategoryType>> {
  const connection = await getConnection();
  try {
    return await select_lang_mst(connection);
  } catch (error: any) {
    console.log("getLangCategories" + error);
    return [];
  } finally {
    releaseConnection(connection);
  }
}
