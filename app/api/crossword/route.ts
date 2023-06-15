import { excuteQuery, transaction } from "@/app/libs/db/mysql";
import { INSERT_CROSSWORD, INSERT_CROSSWORD_DETAIL } from "@/app/libs/db/sql/crossword";
import { changeMinuteToSecond } from "@/app/utils/utils";
import { NextResponse } from "next/server";


export async function POST(
  request: Request, 
) {
  try {
    const body = await request.json();
    const { crossword, crosswordQuestions } = body;

    const crosswordInsert = await transaction(insert_crossword_logic(crossword, crosswordQuestions));
  
    return NextResponse.json(crosswordInsert);
  } catch (error: any) {
    throw new Error(error);
  }
}

const insert_crossword_logic = (crossword: any, crosswordQuestions: any) => {
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

      for (const key of Object.keys(crosswordQuestions)) {
        const items = crosswordQuestions[key];
        for (const itemKey of Object.keys(items)) {
          const item = items[itemKey];
          const obj = {
            clue: item.clue,
            hint: item.hint,
            answer: item.answer,
            direction: key
          };
          await excuteQuery(conn, INSERT_CROSSWORD_DETAIL, [obj.clue, obj.hint, obj.answer, Number(crosswordInsertInfo.insertId), obj.direction]);
        }
      }

      return crosswordInsertInfo;
    } catch (err) {
      throw err;
    }
  };
};
