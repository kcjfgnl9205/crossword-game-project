import { excuteQuery, getConnection, releaseConnection } from "@/app/libs/db/mysql";
import { SELECT_V_CROSSWORD_MAX_RESULT } from "@/app/libs/db/sql/result";


type Props =  {
  username: string;
}

export default async function getCrosswordMaxResults(params: Props): Promise<Array<any>> {
  const connection = await getConnection();
  try {
    const crosswordResults: Array<any> = await excuteQuery(connection, SELECT_V_CROSSWORD_MAX_RESULT, [params.username]);
    const transformedData: Array<any> = [];

    crosswordResults.forEach((row: any) => {
      const categoryIndex = transformedData?.findIndex((item) => item?.id === row.category_id);
      if (categoryIndex === -1) {
        // 新しい category 追加
        transformedData.push({
          id: row.category_id,
          name: row.category_name,
          name_en: row.category_name_en,
          parts: [
            {
              id: row.part_id,
              name: row.part_name,
              chapters: [
                {
                  id: row.chapter_id,
                  name: row.chapter_name,
                  title: row.crossword_title,
                  langs: [
                    {
                      id: row.lang_id,
                      name: row.lang_name,
                      name_en: row.lang_name_en,
                      total_questions: row.total_questions,
                      total_correct_answers: row.total_correct_answers
                    }
                  ]
                }
              ]
            },
          ],
        });
      } else {
        const partIndex = transformedData[categoryIndex]?.parts.findIndex((item: any) => item?.id === row.part_id);
        if (partIndex === -1) {
          // 新しい part 追加
          transformedData[categoryIndex].parts.push({
            id: row.part_id,
            name: row.part_name,
            chapters: [
              {
                id: row.chapter_id,
                name: row.chapter_name,
                title: row.crossword_title,
                langs: [
                  {
                    id: row.lang_id,
                    name: row.lang_name,
                    name_en: row.lang_name_en,
                    total_questions: row.total_questions,
                    total_correct_answers: row.total_correct_answers
                  }
                ]
              }
            ]
          });
        } else {
          const chapterIndex = transformedData[categoryIndex].parts[partIndex]?.chapters.findIndex((chapter: any) => chapter?.id === row.chapter_id);
          if (chapterIndex === -1) {
            // 新しい　chapter 追加
            transformedData[categoryIndex].parts[partIndex].chapters.push({
              id: row.chapter_id,
              name: row.chapter_name,
              title: row.crossword_title,
              langs: [
                {
                  id: row.lang_id,
                  name: row.lang_name,
                  name_en: row.lang_name_en,
                  total_questions: row.total_questions,
                  total_correct_answers: row.total_correct_answers
                }
              ]
            });
          } else {
            const langIndex = transformedData[categoryIndex].parts[partIndex].chapters[chapterIndex]?.langs.findIndex((lang: any) => lang?.id === row.lang_id);
            if (langIndex === -1) {
              transformedData[categoryIndex].parts[partIndex].chapters[chapterIndex].langs.push({
                id: row.lang_id,
                name: row.lang_name,
                name_en: row.lang_name_en,
                total_questions: row.total_questions,
                total_correct_answers: row.total_correct_answers
              });
            }
          }
        }
      }
    });

    return transformedData;
  } catch (error: any) {
    console.log("getCrosswordMaxResults" + error);
    return [];
  } finally {
    releaseConnection(connection);
  }
}
