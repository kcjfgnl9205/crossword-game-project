import { excuteQuery, getConnection, releaseConnection } from "@/app/libs/db/mysql";
import { SELECT_CROSSWORD_MST_BY_CATEGORY } from "@/app/libs/db/sql/crossword";



type Props =  {
  slug: string; // カテゴリー名(name_en)
}

export default async function getCrosswordsByCategory(params: Props): Promise<Array<any>> {
  const connection = await getConnection();
  try {
    const crosswords: Array<any> = await excuteQuery(connection, SELECT_CROSSWORD_MST_BY_CATEGORY, [params.slug])
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
                    title: row.chapter_title,
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
                  title: row.chapter_title,
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
              title: row.chapter_title,
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
    console.log("getCrosswordsByCategory" + error);
    return [];
  } finally {
    releaseConnection(connection);
  }
}
