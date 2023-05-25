import { getConnection, releaseConnection } from "@/app/libs/db/mysql";
import { find_name_mst_game_min_cnt } from "../libs/db/sql/settings/name_mst";


export default async function getCrosswordGameMincnt(): Promise<number> {
  const connection = await getConnection();
  try {
    const minCnt = await find_name_mst_game_min_cnt(connection);
    if (!minCnt[0] || isNaN(minCnt[0].name)) {
      return -1;
    }

    return Number(minCnt[0].name);
  } catch (error: any) {
    console.log("getLangCategories" + error);
    return -1;
  } finally {
    releaseConnection(connection);
  }
}
