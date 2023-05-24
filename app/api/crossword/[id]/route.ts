import { NextResponse } from "next/server";
import { getConnection, releaseConnection, transaction } from "@/app/libs/db/mysql";
import { delete_crossword_mst } from "@/app/libs/db/sql/crossword/crossword_mst";
import { delete_crossword_map, find_crossword_map } from "@/app/libs/db/sql/crossword/crossword_mst_detail_map";
import { delete_crossword_detail } from "@/app/libs/db/sql/crossword/crossword_detail";


type IParams = {
  id?: string;
}

export async function DELETE(
  request: Request, 
  { params }: { params: IParams }
) {
  const connection = await getConnection();

  try {
    connection?.beginTransaction();

    const { id } = params;
    if (!id || typeof id !== 'string') {
      throw new Error('Invalid ID');
    }

    const crosswordDelete = await transaction(delete_crossword_logic(Number(id)));

    return NextResponse.json(crosswordDelete);

  } catch (error: any) {
    throw new Error(error);
  } finally {
    releaseConnection(connection);
  }
}


const delete_crossword_logic = (id: number) => {
  return async (conn: any) => {
    try {
      const crosswordInfo = await find_crossword_map(conn, id);
      const crosswordId = crosswordInfo.crossword_id;
      if (crosswordId) {
        await delete_crossword_map(conn, id);
        await delete_crossword_detail(conn, id);
        await delete_crossword_mst(conn, crosswordId);
      }

      return crosswordInfo;
    } catch (err) {
      throw err;
    }
  };
};
