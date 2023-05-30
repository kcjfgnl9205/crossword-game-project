import getCategories from "@/app/actions/getCategories";
import { transaction } from "@/app/libs/db/mysql";
import { delete_category_mst } from "@/app/libs/db/sql/category/category_mst";
import { NextResponse } from "next/server";


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

    await transaction(delete_category_logic(Number(id)));
    const categories = await getCategories();

    return NextResponse.json(categories);
  } catch (error: any) {
    throw new Error(error);
  }
}


const delete_category_logic = (id: number) => {
  return async (conn: any) => {
    try {
      const deleteInfo = await delete_category_mst(conn, id);
      return deleteInfo;
    } catch (err) {
      throw err;
    }
  };
};