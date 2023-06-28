import { excuteQuery, getConnection, releaseConnection } from "@/app/libs/db/mysql";
import { SELECT_V_CROSSWORD_RESULT } from "../libs/db/sql/result";


type Props =  {
  username: string;
  slug: string;
}

export default async function getCrosswordAllResults(params: Props): Promise<Array<any>> {
  const connection = await getConnection();
  try {
    const crosswordResults: Array<any> = await excuteQuery(connection, SELECT_V_CROSSWORD_RESULT, [params.username, params.slug]);
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
                  title: row.chapter_title,
                  langs: [
                    {
                      id: row.lang_id,
                      name: row.lang_name,
                      name_en: row.lang_name_en,
                      scroe: row.result_u_scroe,
                      answers: [
                        {
                          id: row.result_id,
                          times: row.result_times,
                          scroe: row.result_u_scroe,
                          result: [
                            {
                              id: row.result_detail_id,
                              clue: row.result_detail_clue,
                              answer: row.result_detail_answer,
                              usedHint: row.result_detail_u_hint,
                              isCorrect: row.isCorrect
                            }
                          ]
                        }
                      ]
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
                title: row.chapter_title,
                langs: [
                  {
                    id: row.lang_id,
                    name: row.lang_name,
                    name_en: row.lang_name_en,
                    scroe: row.result_u_scroe,
                    answers: [
                      {
                        id: row.result_id,
                        times: row.result_times,
                        scroe: row.result_u_scroe,
                        result: [
                          {
                            id: row.result_detail_id,
                            clue: row.result_detail_clue,
                            answer: row.result_detail_answer,
                            usedHint: row.result_detail_u_hint,
                            isCorrect: row.isCorrect
                          }
                        ]
                      }
                    ]
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
              title: row.chapter_title,
              langs: [
                {
                  id: row.lang_id,
                  name: row.lang_name,
                  name_en: row.lang_name_en,
                  scroe: row.result_u_scroe,
                  answers: [
                    {
                      id: row.result_id,
                      times: row.result_times,
                      scroe: row.result_u_scroe,
                      result: [
                        {
                          id: row.result_detail_id,
                          clue: row.result_detail_clue,
                          answer: row.result_detail_answer,
                          usedHint: row.result_detail_u_hint,
                          isCorrect: row.isCorrect
                        }
                      ]
                    }
                  ]
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
                scroe: row.result_u_scroe,
                answers: [
                  {
                    id: row.result_id,
                    times: row.result_times,
                    scroe: row.result_u_scroe,
                    result: [
                      {
                        id: row.result_detail_id,
                        clue: row.result_detail_clue,
                        answer: row.result_detail_answer,
                        usedHint: row.result_detail_u_hint,
                        isCorrect: row.isCorrect
                      }
                    ]
                  }
                ]
              });
            } else {
              const answerIndex = transformedData[categoryIndex].parts[partIndex].chapters[chapterIndex].langs[langIndex]?.answers.findIndex((answer: any) => answer?.id === row.result_id);
              if (answerIndex === -1) {
                transformedData[categoryIndex].parts[partIndex].chapters[chapterIndex].langs[langIndex].answers.push({
                  id: row.result_id,
                  times: row.result_times,
                  scroe: row.result_u_scroe,
                  result: [
                    {
                      id: row.result_detail_id,
                      clue: row.result_detail_clue,
                      answer: row.result_detail_answer,
                      usedHint: row.result_detail_u_hint,
                      isCorrect: row.isCorrect
                    }
                  ]
                });
              } else {
                transformedData[categoryIndex].parts[partIndex].chapters[chapterIndex].langs[langIndex].answers[answerIndex].result.push({
                  id: row.result_detail_id,
                  clue: row.result_detail_clue,
                  answer: row.result_detail_answer,
                  usedHint: row.result_detail_u_hint,
                  isCorrect: row.isCorrect
                });
              }
            }
          }
        }
      }
    });

    return transformedData[0];
  } catch (error: any) {
    console.log("getCrosswordAllResults" + error);
    return [];
  } finally {
    releaseConnection(connection);
  }
}
