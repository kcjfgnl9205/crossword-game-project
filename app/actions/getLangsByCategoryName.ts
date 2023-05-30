import { getConnection, releaseConnection } from "@/app/libs/db/mysql";
import { select_lang_mst_by_categoryname } from "../libs/db/sql/category/lang_mst";
import { LangType } from "../types";


type Props =  {
  slug: string;
}

export default async function getLangsByCategoryName(params: Props): Promise<Array<LangType>> {
  const connection = await getConnection();
  try {
    return await select_lang_mst_by_categoryname(connection, params.slug);
  } catch (error: any) {
    console.log("getCategories" + error);
    return [];
  } finally {
    releaseConnection(connection);
  }
}
