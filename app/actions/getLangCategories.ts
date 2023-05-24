import { getConnection, releaseConnection } from "@/app/libs/db/mysql";
import { select_lang_mst } from "../libs/db/sql/category/lang_mst";


export default async function getLangCategories() {
  const connection = await getConnection();
  try {
    const categories = await select_lang_mst(connection);

    return categories;
  } catch (error: any) {
    throw new Error(error);
  } finally {
    releaseConnection(connection);
  }
}
