import { getConnection, releaseConnection, transaction } from "@/app/libs/db/mysql";
import { insert_crossword_detail } from "@/app/libs/db/sql/crossword/crossword_detail";
import { insert_crossword_map } from "@/app/libs/db/sql/crossword/crossword_mst_detail_map";
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
        part_id: Number(crossword.part),
        chapter_id: Number(crossword.chapter) 
      });

      const crosswordinfo = await insert_crossword_map(conn, {
        crossword_mst_id: Number(crosswordInsertInfo.insertId),
        lang_id: Number(crossword.lang),
        time_limit: changeMinuteToSecond(Number(crossword.minute), Number(crossword.second))
      })
        
        Object.keys(crosswordQuestions).forEach(async (key) => {
          const items = crosswordQuestions[key]; 
          Object.keys(items).forEach(async (itemKey) => {
            const item = items[itemKey];
            await insert_crossword_detail(conn, {
              number: Number(itemKey),
              clue: item.clue,
              hint: item.hint,
              answer: item.answer,
              col: item.col,
              row: item.row,
              crossword_id: Number(crosswordinfo.insertId),
              direction: key
            });
          });
        });

        return crosswordinfo;
    } catch (err) {
        throw err;
    }
  };
};