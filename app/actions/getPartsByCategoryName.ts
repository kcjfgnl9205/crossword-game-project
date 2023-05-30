import { getConnection, releaseConnection } from "@/app/libs/db/mysql";
import { CategoryType } from "../types";
import { select_part_mst_by_categoryname } from "../libs/db/sql/category/part_mst";


type Props =  {
  slug: string;
}

export default async function getPartsByCategoryName(params: Props): Promise<Array<CategoryType>> {
  const connection = await getConnection();
  try {
    return await select_part_mst_by_categoryname(connection, params.slug);
  } catch (error: any) {
    console.log("getCategories" + error);
    return [];
  } finally {
    releaseConnection(connection);
  }
}
