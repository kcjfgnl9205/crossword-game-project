import { getConnection, releaseConnection } from "@/app/libs/db/mysql";
import { select_crossword_by_id } from "../libs/db/sql/crossword/select_crossword_by_id";
import { ClueType, CrosswordGameType } from "../types";
import { changeSecondToMinute } from "../utils/utils";


type Props =  {
  slug: string;
  id: string;
}

export default async function getCrosswordById(params: Props): Promise<CrosswordGameType | null> {
  const connection = await getConnection();
  try {
    const crosswords: Array<any> = await select_crossword_by_id(connection, Number(params.id));
    const { minute, second } = changeSecondToMinute(crosswords[0].time_limit);
    const formattedData: CrosswordGameType = {
      id: crosswords[0].id,
      title: crosswords[0].title,
      minute: minute,
      second: second,
      category_id: crosswords[0].category_id,
      category_name: crosswords[0].category_name,
      category_name_en: crosswords[0].category_name_en,
      part_id: crosswords[0].part_id,
      part_name: crosswords[0].part_name,
      chapter_id: crosswords[0].chapter_id,
      chapter_name: crosswords[0].chapter_name,
      lang_id: crosswords[0].lang_id,
      lang_name: crosswords[0].lang_name,
      lang_name_en: crosswords[0].lang_name_en,
      questions: {
        across: {},
        down: {}
      }
    };
    
    for (const entry of crosswords) {
      const { question_id, question_number, clue, answer, hint, direction, x_coordinates, y_coordinates } = entry;
      const questionObj: ClueType = {
        id: question_id,
        direction: direction,
        number: question_number,
        clue: clue,
        answer: answer,
        hint: hint,
        col: x_coordinates,
        row: y_coordinates
      };
    
      if (direction === 'across') {
        formattedData.questions.across[question_number] = questionObj;
      } else if (direction === 'down') {
        formattedData.questions.down[question_number] = questionObj;
      }
    }
    
    return formattedData;
  } catch (error: any) {
    console.log("getCrosswordById" + error);
    return null;
  } finally {
    releaseConnection(connection);
  }
}
