import {  transaction } from "@/app/libs/db/mysql";
import { insert_crossword_detail } from "@/app/libs/db/sql/crossword/crossword_detail";
import { insert_crossword_mst } from "@/app/libs/db/sql/crossword/crossword_mst";
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
      const crosswordInsertInfo = await insert_crossword_mst(conn, {
        title: crossword.title, 
        time_limit: changeMinuteToSecond(Number(crossword.minute), Number(crossword.second)),
        category_id: Number(crossword.category_id),
        part_id: Number(crossword.part_id),
        chapter_id: Number(crossword.chapter_id),
        lang_id: Number(crossword.lang_id)
      });

      for (const key of Object.keys(crosswordQuestions)) {
        const items = crosswordQuestions[key];
        for (const itemKey of Object.keys(items)) {
          const item = items[itemKey];
          await insert_crossword_detail(conn, Number(crosswordInsertInfo.insertId), {
            number: Number(itemKey),
            clue: item.clue,
            hint: item.hint,
            answer: item.answer,
            col: item.col,
            row: item.row,
            direction: key
          });
        }
      }

      return crosswordInsertInfo;
    } catch (err) {
      throw err;
    }
  };
};
