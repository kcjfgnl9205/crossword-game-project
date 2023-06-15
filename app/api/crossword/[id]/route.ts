import { NextResponse } from "next/server";
import { changeMinuteToSecond } from "@/app/utils/utils";
import { excuteQuery, transaction } from "@/app/libs/db/mysql";
import { DELETE_CROSSWORD, DELETE_CROSSWORD_DETAIL, INSERT_CROSSWORD_DETAIL, UPDATE_CROSSWORD, UPDATE_CROSSWORD_DETAIL } from "@/app/libs/db/sql/crossword";
import { INSERT_CROSSWORD_RESULT, INSERT_CROSSWORD_RESULT_DETAIL } from "@/app/libs/db/sql/result";


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
      const obj = crossword;
      const crosswordResultInfo = await excuteQuery(conn, INSERT_CROSSWORD_RESULT, [obj.crossword_id, obj.title, obj.time_limit, obj.u_time_limit, obj.u_score, obj.category_id, obj.part_id, obj.chapter_id, obj.lang_id, obj.user_id, obj.category_id, obj.part_id, obj.chapter_id, obj.lang_id, obj.user_id])

      for (const key of Object.keys(crossword.answers)) {
        const items = crossword.answers[key];
        for (const itemKey of Object.keys(items)) {
          const item = items[itemKey];
          const obj = {
            clue: item.clue,
            hint: item.hint,
            answer: item.answer,
            direction: key,
            u_hint: item.usedHint,
            u_answer: item.userAnswer ? item.userAnswer.join("") : ""
          }
          await excuteQuery(conn, INSERT_CROSSWORD_RESULT_DETAIL, [Number(crosswordResultInfo.insertId), obj.clue, obj.hint, obj.answer, obj.direction, obj.u_hint, obj.u_answer])
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
        excuteQuery(conn, DELETE_CROSSWORD, [new Date(), id]),
        excuteQuery(conn, DELETE_CROSSWORD_DETAIL, [new Date(), id])
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
      const obj = {
        title: crossword.title, 
        time_limit: changeMinuteToSecond(Number(crossword.minute), Number(crossword.second)),
        category_id: Number(crossword.category_id),
        part_id: Number(crossword.part_id),
        chapter_id: Number(crossword.chapter_id),
        lang_id: Number(crossword.lang_id)
      }
      await excuteQuery(conn, UPDATE_CROSSWORD, [obj.title, obj.time_limit, obj.part_id, obj.chapter_id, obj.lang_id, id, obj.category_id])

      for (const key of Object.keys(crosswordQuestions)) {
        const items = crosswordQuestions[key];
        for (const itemKey of Object.keys(items)) {
          const item = items[itemKey];
          if (item.id) {
            const obj = {
              clue: item.clue,
              hint: item.hint,
              answer: item.answer,
              crossword_id: id,
              direction: key
            }
            await excuteQuery(conn, UPDATE_CROSSWORD_DETAIL, [obj.clue, obj.hint, obj.answer, obj.direction, item.id, obj.crossword_id])
          } else {
            const obj = {
              clue: item.clue,
              hint: item.hint,
              answer: item.answer,
              direction: key
            };
            await excuteQuery(conn, INSERT_CROSSWORD_DETAIL, [obj.clue, obj.hint, obj.answer, id, obj.direction]);
          };
        }
      }

      return { status: 200, message: "修正しました。" };
    } catch (err) {
      throw err;
    }
  };
};
