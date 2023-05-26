import { NextResponse } from "next/server";
import { getConnection, releaseConnection, transaction } from "@/app/libs/db/mysql";
import { delete_crossword_mst, update_crossword_mst } from "@/app/libs/db/sql/crossword/crossword_mst";
import { delete_crossword_map, find_crossword_map, update_crossword_map } from "@/app/libs/db/sql/crossword/crossword_mst_detail_map";
import { delete_crossword_detail, insert_crossword_detail, update_crossword_detail } from "@/app/libs/db/sql/crossword/crossword_detail";
import { changeMinuteToSecond } from "@/app/utils/utils";


type IParams = {
  id?: string;
}

export async function DELETE(
  request: Request, 
  { params }: { params: IParams }
) {
  try {
    const { id } = params;
    if (!id || typeof id !== 'string') {
      throw new Error('Invalid ID');
    }

    await transaction(delete_crossword_logic(Number(id)));

    return NextResponse.json({ status: 200, message: "削除しました。" });
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function PUT(
  request: Request, 
  { params }: { params: IParams }
) {
  try {
    const { id } = params;
    if (!id || typeof id !== 'string') {
      throw new Error('Invalid ID');
    }
    
    const body = await request.json();
    const { crossword, crosswordQuestions } = body;
    

    await transaction(update_crossword_logic(Number(id), crossword, crosswordQuestions));

    return NextResponse.json({ status: 200, message: "修正しました。" });
  } catch (error: any) {
    throw new Error(error);
  }
}

const delete_crossword_logic = (id: number) => {
  return async (conn: any) => {
    try {
      const crosswordInfo = await find_crossword_map(conn, id);
      const crosswordId = crosswordInfo[0].crossword_id;
      if (crosswordId) {
        await Promise.all([
          delete_crossword_map(conn, id),
          delete_crossword_detail(conn, id),
          delete_crossword_mst(conn, crosswordId)
        ])
      }

      return crosswordInfo;
    } catch (err) {
      throw err;
    }
  };
};

const update_crossword_logic = (id: number, crossword: any, crosswordQuestions: any) => {
  return async (conn: any) => {
    try {
      const crosswordInfo = await find_crossword_map(conn, id);
      const crosswordId = crosswordInfo[0].crossword_id;
      if (crosswordId) {
        await Promise.all([
          update_crossword_map(conn, id, {
            lang_id: Number(crossword.lang),
            time_limit: changeMinuteToSecond(Number(crossword.minute), Number(crossword.second))
          }),
          update_crossword_mst(conn, crosswordId, {
            title: crossword.title,
            part_id: Number(crossword.part),
            chapter_id: Number(crossword.chapter)
          }),
        ])
      }

      for (const key of Object.keys(crosswordQuestions)) {
        const items = crosswordQuestions[key];
        for (const itemKey of Object.keys(items)) {
          const item = items[itemKey];
          if (item.id) {
            await update_crossword_detail(conn, id, item.id, {
              number: Number(itemKey),
              clue: item.clue,
              hint: item.hint,
              answer: item.answer,
              col: item.col,
              row: item.row,
              crossword_id: Number(crosswordId),
              direction: key
            });
          } else {
            await insert_crossword_detail(conn, {
              number: Number(itemKey),
              clue: item.clue,
              hint: item.hint,
              answer: item.answer,
              col: item.col,
              row: item.row,
              crossword_id: Number(crosswordId),
              direction: key
            })
          };
        }
      }

      return crosswordInfo;
    } catch (err) {
      throw err;
    }
  };
};
