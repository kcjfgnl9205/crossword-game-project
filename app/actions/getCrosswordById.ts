import { getConnection, releaseConnection } from "@/app/libs/db/mysql";
import { select_crossword_by_id } from "../libs/db/sql/crossword/select_crossword_by_id";


type Props =  {
  id?: string;
}

export default async function getCrosswordById(params: Props) {
  const connection = await getConnection();
  try {
    const crosswords = await select_crossword_by_id(connection, Number(params.id));
    const formattedData: any = {
      title: crosswords[0]?.title as string,
      time_limit: crosswords[0]?.time_limit,
      part_id: crosswords[0]?.part_id,
      part_name: crosswords[0]?.part_name,
      chapter_id: crosswords[0]?.chapter_id,
      chapter_name: crosswords[0]?.chapter_name,
      lang_id: crosswords[0]?.lang_id,
      lang_name: crosswords[0]?.lang_name,
      lang_name_en: crosswords[0]?.lang_name_en,
      question_cnt: crosswords.length,
      question: {
        across: {},
        down: {}
      }
    };
    
    for (const entry of crosswords) {
      const { question_number, clue, answer, hint, direction, x_coordinates, y_coordinates } = entry;
      const questionObj = {
        direction: direction,
        number: question_number,
        clue: clue,
        answer: answer,
        hint: hint,
        col: x_coordinates,
        row: y_coordinates
      };
    
      if (direction === 'across') {
        formattedData.question.across[question_number] = questionObj;
      } else if (direction === 'down') {
        formattedData.question.down[question_number] = questionObj;
      }
    }
    
    return formattedData;
  } catch (error: any) {
    throw new Error(error);
  } finally {
    releaseConnection(connection);
  }
}
