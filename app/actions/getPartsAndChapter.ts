import { getConnection, releaseConnection } from "@/app/libs/db/mysql";
import { select_all_part_chapter } from "../libs/db/sql/crossword/select_all_part_chapter";
import { PartCategoryType } from "../types";


export default async function getPartsAndChapter(): Promise<Array<PartCategoryType>> {
  const connection = await getConnection();
  try {    
    const parts = await select_all_part_chapter(connection);

    const transformedData: Array<PartCategoryType> = [];
    parts?.forEach((row: any) => {
      const partIndex = transformedData.findIndex((item) => item?.id === row?.id);
      if (partIndex === -1) {
        // 新しい単元追加
        transformedData.push({
          id: row?.id,
          name: row?.name,
          disabled: row?.part_cnt > 0,
          sorted: row?.sorted,
          chapters: [{
              id: row?.chapter_id,
              name: row?.chapter_name,
              flg: row?.chapter_flg,
              disabled: row?.chapter_cnt > 0,
              title: row?.title
          }],
        });
      } else {
        // 既存単元に章を追加
        if (row?.chapter_id) {
          transformedData[partIndex].chapters?.push({
            id: row?.chapter_id,
            name: row?.chapter_name,
            flg: row?.chapter_flg,
            disabled: row?.chapter_cnt > 0,
            title: row?.title
          });
        }
      }
    })

    return transformedData;
  } catch (error: any) {
    console.log("getPartsAndChapter" + error);
    return [];
  } finally {
    releaseConnection(connection);
  }
}
