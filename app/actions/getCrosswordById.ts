import { excuteQuery, getConnection, releaseConnection } from "@/app/libs/db/mysql";
import { CrosswordType } from "@/app/types";
import { changeSecondToMinute } from "@/app/utils/utils";
import { SELECT_CROSSWORD_BY_ID } from "@/app/libs/db/sql/crossword";


type Props =  {
  slug: string;
  id: string;
}

export default async function getCrosswordById(params: Props): Promise<any> {
  const connection = await getConnection();
  try {
    const crosswords: Array<any> = await excuteQuery(connection, SELECT_CROSSWORD_BY_ID, [Number(params.id), params.slug]);
    const transformedData: Array<any> = [];
    const { minute, second } = changeSecondToMinute(crosswords[0].time_limit);

    crosswords.forEach((row: any) => {
      const crosswordIndex = transformedData?.findIndex((crossword: any) => crossword?.id === row.id);
      if (crosswordIndex === -1) {
        transformedData.push({
          id: crosswords[0].id,
          title: crosswords[0].title,
          minute: minute,
          second: second,
          category: {
            id: crosswords[0].category_id,
            name: crosswords[0].category_name,
            name_en: crosswords[0].category_name_en,
            sorted: crosswords[0].category_sorted,
            min_cnt: crosswords[0].category_min_cnt,
            langs: [{
              id: crosswords[0].lang_id,
              name: crosswords[0].lang_name,
              name_en: crosswords[0].lang_name_en,
              flg: false
            }],
            parts: [{
              id: crosswords[0].part_id,
              name: crosswords[0].part_name,
              sorted: crosswords[0].part_sorted,
              chapters: [{
                id: crosswords[0].chapter_id,
                name: crosswords[0].chapter_name,
                sorted: crosswords[0].chapter_sorted,
                flg: crosswords[0].chapter_flg
              }]
            }]
          },
          questions: [{
            id: row.question_id,
            clue: row.clue,
            hint: row.hint,
            answer: row.answer,
            direction: row.direction
          }]
        })
      } else {
        transformedData[crosswordIndex].questions.push({
          id: row.question_id,
          clue: row.clue,
          hint: row.hint,
          answer: row.answer,
          direction: row.direction
        })
      }
    });
    
    return transformedData[0];
  } catch (error: any) {
    console.log("getCrosswordById" + error);
    return null;
  } finally {
    releaseConnection(connection);
  }
}
