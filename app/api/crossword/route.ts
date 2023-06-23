import { excuteQuery, transaction } from "@/app/libs/db/mysql";
import { INSERT_CROSSWORD, INSERT_CROSSWORD_DETAIL } from "@/app/libs/db/sql/crossword";
import { changeMinuteToSecond } from "@/app/utils/utils";
import { NextResponse } from "next/server";


export async function POST(
  request: Request, 
) {
  try {
    const body = await request.json();
    const { crossword } = body;

    const crosswordInsert = await transaction(insert_crossword_logic(crossword));
  
    return NextResponse.json(crosswordInsert);
  } catch (error: any) {
    throw new Error(error);
  }
}

const insert_crossword_logic = (crossword: any) => {
  return async (conn: any) => {
    try {
      const obj = {
        title: crossword.title, 
        time_limit: changeMinuteToSecond(Number(crossword.minute), Number(crossword.second)),
        category_id: Number(crossword.category_id),
        part_id: Number(crossword.part_id),
        chapter_id: Number(crossword.chapter_id),
        lang_id: Number(crossword.lang_id)
      };
      const crosswordInsertInfo = await excuteQuery(conn, INSERT_CROSSWORD, [obj.title, obj.time_limit, obj.category_id, obj.part_id, obj.chapter_id, obj.lang_id]);

      for (let i = 0; i < crossword.questions.length; i++) {
        const question = crossword.questions[i];
        await excuteQuery(conn, INSERT_CROSSWORD_DETAIL, [question.clue, question.hint, question.answer, Number(crosswordInsertInfo.insertId)]);
      }

      return crosswordInsertInfo;
    } catch (err) {
      throw err;
    }
  };
};
