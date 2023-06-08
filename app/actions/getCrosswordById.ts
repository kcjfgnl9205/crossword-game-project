import { getConnection, releaseConnection } from "@/app/libs/db/mysql";
import { select_crossword_by_id } from "../libs/db/sql/crossword/select_crossword_by_id";
import { ClueType, CrosswordType } from "../types";
import { changeSecondToMinute } from "../utils/utils";


type Props =  {
  slug: string;
  id: string;
}

export default async function getCrosswordById(params: Props): Promise<CrosswordType | null> {
  const connection = await getConnection();
  try {
    const crosswords: Array<any> = await select_crossword_by_id(connection, Number(params.id), params.slug);
    const { minute, second } = changeSecondToMinute(crosswords[0].time_limit);
    const formattedData: CrosswordType = {
      id: crosswords[0].id,
      title: crosswords[0].title,
      minute: minute,
      second: second,
      category: {
        id: crosswords[0].category_id,
        name: crosswords[0].category_name,
        name_en: crosswords[0].category_name_en,
        sorted: crosswords[0].category_sorted,
        min_cnt: crosswords[0].category_min_cnt
      },
      part: {
        id: crosswords[0].part_id,
        name: crosswords[0].part_name,
        sorted: crosswords[0].part_sorted
      },
      chapter: {
        id: crosswords[0].chapter_id,
        name: crosswords[0].chapter_name,
        sorted: crosswords[0].chapter_sorted,
        flg: crosswords[0].chapter_flg
      },
      lang: {
        id: crosswords[0].lang_id,
        name: crosswords[0].lang_name,
        name_en: crosswords[0].lang_name_en,
        cnt: 0
      },
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
