import { NextResponse } from "next/server";
import { transaction } from "@/app/libs/db/mysql";
import { delete_crossword_mst, update_crossword_mst } from "@/app/libs/db/sql/crossword/crossword_mst";
import { delete_crossword_detail, insert_crossword_detail, update_crossword_detail } from "@/app/libs/db/sql/crossword/crossword_detail";
import { changeMinuteToSecond } from "@/app/utils/utils";
import { insert_crossword_result_mst } from "@/app/libs/db/sql/crossword/crossword_result_mst";
import { insert_crossword_result_detail } from "@/app/libs/db/sql/crossword/crossword_result_detail";


type IParams = {
  id?: string;
}

export async function POST(
  request: Request, 
  { params }: { params: IParams }
) {
  try {
    const { id } = params;
    if (!id || typeof id !== 'string') {
      throw new Error('Invalid ID');
    }
    
    const body = await request.json();
    const { crossword } = body;

    const response = await transaction(insert_crossword_result_logic(Number(id), crossword));

    return NextResponse.json(response);
  } catch (error: any) {
    throw new Error(error);
  }
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

    const response = await transaction(delete_crossword_logic(Number(id)));

    return NextResponse.json(response);
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

    const response = await transaction(update_crossword_logic(Number(id), crossword, crosswordQuestions));

    return NextResponse.json(response);
  } catch (error: any) {
    throw new Error(error);
  }
}

const insert_crossword_result_logic = (id: number, crossword: any) => {
  return async (conn: any) => {
    try {
      const crosswordResultInfo = await insert_crossword_result_mst(conn, crossword);
      for (const key of Object.keys(crossword.answers)) {
        const items = crossword.answers[key];
        for (const itemKey of Object.keys(items)) {
          const item = items[itemKey];
          await insert_crossword_result_detail(conn, Number(crosswordResultInfo.insertId), {
            number: Number(itemKey),
            clue: item.clue,
            hint: item.hint,
            answer: item.answer,
            x_coordinates: item.col,
            y_coordinates: item.row,
            direction: key,
            u_hint: item.usedHint,
            u_answer: item.userAnswer ? item.userAnswer.join("") : ""
          });
        }
      }
      return { status: 200, message: "登録しました。" };
    } catch (err) {
      throw err;
    }
  };
};

const delete_crossword_logic = (id: number) => {
  return async (conn: any) => {
    try {
      await Promise.all([
        delete_crossword_mst(conn, id),
        delete_crossword_detail(conn, id)
      ])

      return { status: 200, message: "削除しました。" };
    } catch (err) {
      throw err;
    }
  };
};

const update_crossword_logic = (id: number, crossword: any, crosswordQuestions: any) => {
  return async (conn: any) => {
    try {
      await update_crossword_mst(conn, id, {
        title: crossword.title, 
        time_limit: changeMinuteToSecond(Number(crossword.minute), Number(crossword.second)),
        category_id: Number(crossword.category_id),
        part_id: Number(crossword.part_id),
        chapter_id: Number(crossword.chapter_id),
        lang_id: Number(crossword.lang_id)
      })

      for (const key of Object.keys(crosswordQuestions)) {
        const items = crosswordQuestions[key];
        for (const itemKey of Object.keys(items)) {
          const item = items[itemKey];
          if (item.id) {
            await update_crossword_detail(conn, item.id, {
              number: Number(itemKey),
              clue: item.clue,
              hint: item.hint,
              answer: item.answer,
              col: item.col,
              row: item.row,
              crossword_id: id,
              direction: key
            });
          } else {
            await insert_crossword_detail(conn, id, {
              number: Number(itemKey),
              clue: item.clue,
              hint: item.hint,
              answer: item.answer,
              col: item.col,
              row: item.row,
              direction: key
            })
          };
        }
      }

      return { status: 200, message: "修正しました。" };
    } catch (err) {
      throw err;
    }
  };
};
