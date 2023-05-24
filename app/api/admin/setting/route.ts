import { getConnection, releaseConnection, transaction } from "@/app/libs/db/mysql";
import { delete_chapter_mst, insert_chapter_mst, update_chapter_mst } from "@/app/libs/db/sql/category/chapter_mst";
import { delete_part_mst, insert_part_mst, update_part_mst } from "@/app/libs/db/sql/category/part_mst";
import { NextResponse } from "next/server";


export async function PUT(
  request: Request, 
) {
  const connection = await getConnection();

  try {
    const body = await request.json();
    const { parts, minCnt } = body;
    
    const updateCategory = await transaction(update_category_logic(parts));
  
    return NextResponse.json(updateCategory);
  } catch (error: any) {
    throw new Error(error);
  } finally {
    releaseConnection(connection);
  }
}


const update_category_logic = (parts: Array<any>) => {
  return async (conn: any) => {
    try {
      for (let i = 0; i < parts.length; i++) {
        if (!parts[i].id) {
          //insert
          const insertInfo = await insert_part_mst(conn, {
            name: parts[i].name,
            sorted: i + 1
          })
        
          for (let j = 0; j < parts[i].chapters.length; j++) {
            if (!parts[i].chapters[j].onDelete) {
              await insert_chapter_mst(conn, {
                name: parts[i].chapters[j].name,
                flg: parts[i].chapters[j].flg,
                part_id: insertInfo.insertId,
                sorted: j
              })
            }
          }
        } else if (parts[i].onDelete) {
          //delete
          await delete_part_mst(conn, parts[i].id);
          //delete
          await delete_chapter_mst(conn, Number(parts[i].id));
        } else {
          //update
          await update_part_mst(conn, parts[i].id, {
            name: parts[i].name,
            sorted: i
          });

          for (let j = 0; j < parts[i].chapters.length; j++) {
            if (!parts[i].chapters[j].id) {
              //insert
              await insert_chapter_mst(conn, {
                name: parts[i].chapters[j].name,
                flg: parts[i].chapters[j].flg,
                part_id: parts[i].id,
                sorted: j
              })
            } else if (parts[i].chapters[j].onDelete) {
              //delete
              await delete_chapter_mst(conn, Number(parts[i].chapters[j].id));
            } else {
              //update
              await update_chapter_mst(conn, parts[i].chapters[j].id, {
                name: parts[i].chapters[j].name,
                sorted: j,
                flg: parts[i].chapters[j].flg,
              })

            }
          }
        }
      }
      return parts;
    } catch (err) {
      throw err;
    }
  };
};
