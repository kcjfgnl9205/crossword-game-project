import { transaction } from "@/app/libs/db/mysql";
import { find_category_lang_package, insert_category_lang_package, update_category_lang_package } from "@/app/libs/db/sql/category/category_lang_package";
import { insert_category_mst, update_category_mst } from "@/app/libs/db/sql/category/category_mst";
import { delete_chapter_mst, insert_chapter_mst, update_chapter_mst } from "@/app/libs/db/sql/category/chapter_mst";
import { delete_part_mst, insert_part_mst, update_part_mst } from "@/app/libs/db/sql/category/part_mst";
import { CategoryType } from "@/app/types";
import { NextResponse } from "next/server";


type IParams = {
  id?: string;
}

export async function PUT(
  request: Request, 
  { params }: { params: IParams }
) {
  try {
    const body = await request.json();
    const { categories, category } = body;

    if (categories) {
      // カテゴリー順番修正
      await transaction(update_category_sort_logic(categories));
      return NextResponse.json(categories);
    } else {
      if (category.id) {
        // 修正
        console.log("修正")
        console.log(category)
        await transaction(update_category_logic(category));
      } else {
        // 登録
        console.log("登録")
        console.log(category)
        await transaction(insert_category_logic(category));
      }
      
      return NextResponse.json(category);
    }
  } catch (error: any) {
    throw new Error(error);
  }
}


const update_category_sort_logic = (categories: Array<CategoryType>) => {
  return async (conn: any) => {
    try {
      for (let i = 0; i < categories.length; i++) {
        await update_category_mst(conn, categories[i]);
      }
    } catch (err) {
      throw err;
    }
  };
};

const insert_category_logic = (category: any) => {
  return async (conn: any) => {
    try {
      const categoryMstInfoawait = await insert_category_mst(conn, category);
      for (let i = 0; i < category.langs.length; i++) {
        console.log(categoryMstInfoawait.insertId)
        category.langs[i]
        await insert_category_lang_package(conn, categoryMstInfoawait.insertId, category.langs[i]);  
        console.log("test")
      }

      // 単元、章更新
      for (let i = 0; i < category.parts.length; i++) {
        if (category.parts[i].onDelete && !category.parts[i].id) {
          continue;
        }

        if (category.parts[i].onDelete) {
          //delete
          console.log("1")
          await delete_part_mst(conn, category.parts[i].id);
          await delete_chapter_mst(conn, Number(category.parts[i].id));
        } else if (!category.parts[i].id) {
          console.log("2")
          //insert
          const insertInfo = await insert_part_mst(conn, categoryMstInfoawait.insertId, {
            name: category.parts[i].name,
            sorted: category.parts[i].sorted
          })
          console.log("3")
          for (let j = 0; j < category.parts[i].chapters.length; j++) {
            if (!category.parts[i].chapters[j].onDelete) {
              await insert_chapter_mst(conn, {
                name: category.parts[i].chapters[j].name,
                flg: category.parts[i].chapters[j].flg,
                part_id: insertInfo.insertId,
                sorted: j
              })
            }
          }
        } else {
          console.log("4")
          //update
          await update_part_mst(conn, category.parts[i].id, {
            name: category.parts[i].name,
            sorted: category.parts[i].sorted
          });
          console.log("5")
          for (let j = 0; j < category.parts[i].chapters.length; j++) {
            if (category.parts[i].chapters[j].onDelete && !category.parts[i].chapters[j].id) {
              continue;
            }

            if (category.parts[i].chapters[j].onDelete) {
              console.log("6")
              //delete
              await delete_chapter_mst(conn, Number(category.parts[i].chapters[j].id));
            } else if (!category.parts[i].chapters[j].id) {
              //insert
              console.log("7")
              await insert_chapter_mst(conn, {
                name: category.parts[i].chapters[j].name,
                flg: category.parts[i].chapters[j].flg,
                part_id: category.parts[i].id,
                sorted: j
              });
            } else {
              console.log("8")
              //update
              await update_chapter_mst(conn, category.parts[i].chapters[j].id, {
                name: category.parts[i].chapters[j].name,
                sorted: j,
                flg: category.parts[i].chapters[j].flg,
              });
            }
          }
        }
      }

      return categoryMstInfoawait;
    } catch (err) {
      throw err;
    }
  };
}

const update_category_logic = (category: any) => {
  return async (conn: any) => {
    try {
      // カテゴリーマスタ更新
      await update_category_mst(conn, category);

      for (let i = 0; i < category.langs.length; i++) {
        const categoryLangInfo = await find_category_lang_package(conn, category.id, category.langs[i].id);
        if (categoryLangInfo.length === 0) {
          //登録
          await insert_category_lang_package(conn, category.id, category.langs[i]);
        } else {
          //更新、削除
          await update_category_lang_package(conn, category.id, category.langs[i].id, category.langs[i].checked);
        }
      }

      // 単元、章更新
      for (let i = 0; i < category.parts.length; i++) {
        if (category.parts[i].onDelete && !category.parts[i].id) {
          continue;
        }

        if (category.parts[i].onDelete) {
          //delete
          await delete_part_mst(conn, category.parts[i].id);
          await delete_chapter_mst(conn, Number(category.parts[i].id));
        } else if (!category.parts[i].id) {
          //insert
          const insertInfo = await insert_part_mst(conn, category.id, {
            name: category.parts[i].name,
            sorted: category.parts[i].sorted
          })
        
          for (let j = 0; j < category.parts[i].chapters.length; j++) {
            if (!category.parts[i].chapters[j].onDelete) {
              await insert_chapter_mst(conn, {
                name: category.parts[i].chapters[j].name,
                flg: category.parts[i].chapters[j].flg,
                part_id: insertInfo.insertId,
                sorted: j
              })
            }
          }
        } else {
          //update
          await update_part_mst(conn, category.parts[i].id, {
            name: category.parts[i].name,
            sorted: category.parts[i].sorted
          });

          for (let j = 0; j < category.parts[i].chapters.length; j++) {
            if (category.parts[i].chapters[j].onDelete && !category.parts[i].chapters[j].id) {
              continue;
            }

            if (category.parts[i].chapters[j].onDelete) {
              //delete
              await delete_chapter_mst(conn, Number(category.parts[i].chapters[j].id));
            } else if (!category.parts[i].chapters[j].id) {
              //insert
              await insert_chapter_mst(conn, {
                name: category.parts[i].chapters[j].name,
                flg: category.parts[i].chapters[j].flg,
                part_id: category.parts[i].id,
                sorted: j
              });
            } else {
              //update
              await update_chapter_mst(conn, category.parts[i].chapters[j].id, {
                name: category.parts[i].chapters[j].name,
                sorted: j,
                flg: category.parts[i].chapters[j].flg,
              });
            }
          }
        }
      }
    } catch (err) {
      throw err;
    }
  };
}
