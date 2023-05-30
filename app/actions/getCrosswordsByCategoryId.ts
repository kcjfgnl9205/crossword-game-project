import { getConnection, releaseConnection } from "@/app/libs/db/mysql";
import { select_crosswords_by_category_id } from "../libs/db/sql/crossword/crossword_mst";



export default async function getCrosswordsByCategoryId(id: number): Promise<Array<any>> {
  const connection = await getConnection();
  try {
    const crosswords: Array<any> = await select_crosswords_by_category_id(connection, id);
    const transformedData: Array<any> = [];

    crosswords.forEach((row: any) => {
      const partIndex = transformedData?.findIndex((item) => item?.id === row.part_id);
      if (partIndex === -1) {
        // 新しい part 追加
        transformedData.push({
          id: row.part_id,
          name: row.part_name,
          chapters: [
            {
              id: row.chapter_id,
              name: row.chapter_name,
              crosswords: row.crossword_id
              ? [
                  {
                    id: row.crossword_id,
                    title: row.crossword_title,
                    time_limit: row.crossword_time_limit,
                    lang_id: row.lang_id,
                    lang_name: row.lang_name,
                    lang_name_en: row.lang_name_en,
                    cnt: row.cnt
                 }
                ]: []
            },
          ],
        });
      } else {
        const chapterIndex = transformedData[partIndex]?.chapters.findIndex((chapter: any) => chapter?.id === row.chapter_id);
        if (chapterIndex === -1) {
          // 新しい　chapter 追加
          transformedData[partIndex].chapters.push({
            id: row.chapter_id,
            name: row.chapter_name,
            crosswords: row.crossword_id
            ? [
                {
                  id: row.crossword_id,
                  title: row.crossword_title,
                  time_limit: row.crossword_time_limit,
                  lang_id: row.lang_id,
                  lang_name: row.lang_name,
                  lang_name_en: row.lang_name_en,
                  cnt: row.cnt
               }
              ]: []
          });
        } else {
          // 既存の chapterに クロスワードを 追加
          if (row.crossword_id) {
            transformedData[partIndex].chapters[chapterIndex].crosswords.push({
              id: row.crossword_id,
              title: row.crossword_title,
              time_limit: row.crossword_time_limit,
              lang_id: row.lang_id,
              lang_name: row.lang_name,
              lang_name_en: row.lang_name_en,
              cnt: row.cnt
            });
          }
        }
      }
    });

    return transformedData;
  } catch (error: any) {
    console.log("getCrosswordById" + error);
    return [];
  } finally {
    releaseConnection(connection);
  }
}
