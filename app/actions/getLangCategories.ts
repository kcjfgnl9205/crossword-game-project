import { getConnection, releaseConnection } from "@/app/libs/db/mysql";
import { select_lang_mst } from "../libs/db/sql/category/lang_mst";
import { LangCategoryType } from "../types";


export default async function getLangCategories(): Promise<Array<LangCategoryType>> {
  const connection = await getConnection();
  try {
    const categories = await select_lang_mst(connection);

    return categories;
  } catch (error: any) {
    console.log("getLangCategories" + error);
    return [];
  } finally {
    releaseConnection(connection);
  }
}
