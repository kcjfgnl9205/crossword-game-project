import { getConnection, releaseConnection } from "@/app/libs/db/mysql";
import { select_all_crossword } from "../libs/db/sql/crossword/select_all_crossword";


export type CrosswordType = {
  id: number;
  title: string;
  time_limit: number;
  lang: string;
  lang_en: string;
  cnt?: number;
}

export default async function getCrosswords() {
  const connection = await getConnection();
  try {
    const crosswords = await select_all_crossword(connection);

    const transformedData: Array<any> = [];
    crosswords?.forEach((row: any) => {
      const partIndex = transformedData?.findIndex((item) => item?.part_id === row?.part_id);
      if (partIndex === -1) {
        // 새로운 part 추가
        transformedData.push({
          part_id: row?.part_id,
          part_name: row?.part_name,
          chapters: [
            {
              chapter_id: row?.chapter_id,
              chapter_name: row?.chapter_name,
              crossword_name: row?.title,
              flg: row?.flg,
              questions: row?.crossword_id
                ? [
                    {
                      crossword_id: row?.crossword_id,
                      crossword_lang_name: row?.lang_name,
                      cnt: row?.cnt
                    },
                  ]
                : [],
            },
          ],
        });
      } else {
        const chapterIndex = transformedData[partIndex]?.chapters.findIndex((chapter: any) => chapter?.chapter_id === row?.chapter_id);
        if (chapterIndex === -1) {
          // 새로운 chapter 추가
          transformedData[partIndex]?.chapters.push({
            chapter_id: row?.chapter_id,
            chapter_name: row?.chapter_name,
            crossword_name: row?.title,
            flg: row?.flg,
            questions: row?.crossword_id
              ? [
                  {
                    crossword_id: row?.crossword_id,
                    crossword_lang_name: row?.lang_name,
                    cnt: row?.cnt
                  },
                ]
              : [],
          });
        } else {
          // 기존 chapter에 question 추가
          if (row?.crossword_id) {
            transformedData[partIndex]?.chapters[chapterIndex].questions.push({
              crossword_id: row?.crossword_id,
              crossword_lang_name: row?.lang_name,
              cnt: row?.cnt
            });
          }
        }
      }
    });

    return transformedData;
  } catch (error: any) {
    console.log(error)
  } finally {
    releaseConnection(connection);
  }
}
