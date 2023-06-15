import { excuteQuery, getConnection, releaseConnection } from "@/app/libs/db/mysql";
import { SELECT_V_CROSSWORD_RESULT_BY_ID } from "@/app/libs/db/sql/result";


type Props =  {
  slug: string;
  id: string;
}

export default async function getCrosswordResultsByCrosswordId(params: Props): Promise<any> {
  const connection = await getConnection();
  try {
    const crosswordResults: Array<any> = await excuteQuery(connection, SELECT_V_CROSSWORD_RESULT_BY_ID, [params.slug, Number(params.id)])
    const transformedData: Array<any> = [];

    crosswordResults.forEach((row: any) => {
      const crosswordIndex = transformedData?.findIndex((item) => item?.id === row.crossword_id);
      if (crosswordIndex === -1) {
        // 新しい category 追加
        transformedData.push({
          id: row.crossword_id,
          title: row.result_title,
          category_name_en: row.category_name_en,
          lang: {
            id: row.lang_id,
            name: row.lang_name,
            name_en: row.lang_name_en
          },
          users: [{
            id: row.user_id,
            username: row.user_username,
            answers: [
              {
                id: row.result_id,
                times: row.result_times,
                scroe: row.result_u_scroe,
                result: [
                  {
                    id: row.result_detail_id,
                    direction: row.result_detail_direction,
                    number: row.result_detail_number,
                    clue: row.result_detail_clue,
                    answer: row.result_detail_answer,
                    usedHint: row.result_detail_u_hint,
                    isCorrect: row.isCorrect
                  }
                ]
              }
            ]
          }]
        });
      } else {
        const userIndex = transformedData[crosswordIndex]?.users.findIndex((item: any) => item?.id === row.user_id);
        if (userIndex === -1) {
          // 新しい user 追加
          transformedData[crosswordIndex].users.push({
            id: row.user_id,
            username: row.user_username,
            answers: [{
              id: row.result_id,
              times: row.result_times,
              scroe: row.result_u_scroe,
              result: [
                {
                  id: row.result_detail_id,
                  direction: row.result_detail_direction,
                  number: row.result_detail_number,
                  clue: row.result_detail_clue,
                  answer: row.result_detail_answer,
                  usedHint: row.result_detail_u_hint,
                  isCorrect: row.isCorrect
                }
              ]
            }]
          });
        } else {
          const answerIndex = transformedData[crosswordIndex].users[userIndex]?.answers.findIndex((answer: any) => answer?.id === row.result_id);
          if (answerIndex === -1) {
            transformedData[crosswordIndex].users[userIndex].answers.push({
              id: row.result_id,
              times: row.result_times,
              scroe: row.result_u_scroe,
              result: [
                {
                  id: row.result_detail_id,
                  direction: row.result_detail_direction,
                  number: row.result_detail_number,
                  clue: row.result_detail_clue,
                  answer: row.result_detail_answer,
                  usedHint: row.result_detail_u_hint,
                  isCorrect: row.isCorrect
                }
              ]
            });
          } else {
            transformedData[crosswordIndex].users[userIndex].answers[answerIndex].result.push({
              id: row.result_detail_id,
              direction: row.result_detail_direction,
              number: row.result_detail_number,
              clue: row.result_detail_clue,
              answer: row.result_detail_answer,
              usedHint: row.result_detail_u_hint,
              isCorrect: row.isCorrect
            });
          }
        }
      }
    });
    return transformedData[0];
  } catch (error: any) {
    console.log("getCrosswordResultsByCrosswordId" + error);
    return null;
  } finally {
    releaseConnection(connection);
  }
}
