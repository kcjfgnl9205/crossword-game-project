import getPartsAndChapter from "@/app/actions/getPartsAndChapter";
import { transaction } from "@/app/libs/db/mysql";
import { delete_chapter_mst, insert_chapter_mst, update_chapter_mst } from "@/app/libs/db/sql/category/chapter_mst";
import { update_lang_mst } from "@/app/libs/db/sql/category/lang_mst";
import { delete_part_mst, insert_part_mst, update_part_mst } from "@/app/libs/db/sql/category/part_mst";
import { update_name_mst_game_min_cnt } from "@/app/libs/db/sql/settings/name_mst";
import { LangCategoryType, PartCategoryType } from "@/app/types";
import { NextResponse } from "next/server";


export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const { parts, langs, min_cnt } = body;

    const minCnt = min_cnt.toString();

    // 修正
    await transaction(update_category_logic(parts, minCnt, langs));
  
    // 単元、章データreturn
    const response = await getPartsAndChapter();

    return NextResponse.json(response);
  } catch (error: any) {
    throw new Error(error);
  }
}


const update_category_logic = (parts: Array<PartCategoryType>, minCnt: string, langs: Array<LangCategoryType>) => {
  return async (conn: any) => {
    try {
      // カテゴリー言語選定
      for (let i = 0; i < langs.length; i++) {
        await update_lang_mst(conn, langs[i]);
      }

      // 設定値修正
      await update_name_mst_game_min_cnt(conn, minCnt);

      // 単元、章設定
      for (let i = 0; i < parts.length; i++) {
        if (parts[i].onDelete && !parts[i].id) {
          continue;
        }

        if (parts[i].onDelete) {
          //delete
          await delete_part_mst(conn, parts[i].id);
          await delete_chapter_mst(conn, Number(parts[i].id));
        } else if (!parts[i].id) {
          //insert
          const insertInfo = await insert_part_mst(conn, {
            name: parts[i].name,
            sorted: parts[i].sorted
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
        } else {
          //update
          await update_part_mst(conn, parts[i].id, {
            name: parts[i].name,
            sorted: parts[i].sorted
          });

          for (let j = 0; j < parts[i].chapters.length; j++) {
            if (parts[i].chapters[j].onDelete && !parts[i].chapters[j].id) {
              continue;
            }

            if (parts[i].chapters[j].onDelete) {
              //delete
              await delete_chapter_mst(conn, Number(parts[i].chapters[j].id));
            } else if (!parts[i].chapters[j].id) {
              //insert
              await insert_chapter_mst(conn, {
                name: parts[i].chapters[j].name,
                flg: parts[i].chapters[j].flg,
                part_id: parts[i].id,
                sorted: j
              });
            } else {
              //update
              await update_chapter_mst(conn, parts[i].chapters[j].id, {
                name: parts[i].chapters[j].name,
                sorted: j,
                flg: parts[i].chapters[j].flg,
              });
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
