import { getConnection, releaseConnection } from "@/app/libs/db/mysql";
import { CategoryType } from "../types";
import { find_category_mst_by_slug } from "../libs/db/sql/category/category_mst";


type Props =  {
  slug: string;
}

export default async function getCategoryBySlug(params: Props): Promise<CategoryType | null> {
  const connection = await getConnection();
  try {
    const categories = await find_category_mst_by_slug(connection, params.slug);
    if (categories.length === 0) {
      return null;
    }

    return categories[0];
  } catch (error: any) {
    console.log("getCategories" + error);
    return null;
  } finally {
    releaseConnection(connection);
  }
}
