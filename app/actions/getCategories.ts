import { getConnection, releaseConnection } from "@/app/libs/db/mysql";
import { select_category_mst } from "../libs/db/sql/category/category_mst";
import { CategoryType } from "../types";


// カテゴリーリスト取得する
export default async function getCategories(): Promise<Array<CategoryType>> {
  const connection = await getConnection();
  try {
    return await select_category_mst(connection);
  } catch (error: any) {
    console.log("getCategories" + error);
    return [];
  } finally {
    releaseConnection(connection);
  }
}
