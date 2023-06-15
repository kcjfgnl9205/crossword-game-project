import { NextResponse } from "next/server";
import { excuteQuery, transaction } from "@/app/libs/db/mysql";
import { DELETE_CHAPTER_MST, DELETE_PART_MST, INSERT_CATEGORY_LANG_PACKAGE, INSERT_CATEGORY_MST, INSERT_CHAPTER_MST, INSERT_PART_MST, UPDATE_CATEGORY_LANG_PACKAGE, UPDATE_CATEGORY_MST, UPDATE_CHAPTER_MST, UPDATE_PART_MST } from "@/app/libs/db/sql/category";


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
        await transaction(update_category_logic(category));
      } else {
        // 登録
        await transaction(insert_category_logic(category));
      }
      
      return NextResponse.json(category);
    }
  } catch (error: any) {
    throw new Error(error);
  }
}


const update_category_sort_logic = (categories: Array<any>) => {
  return async (conn: any) => {
    try {
      for (let i = 0; i < categories.length; i++) {
        await excuteQuery(conn, UPDATE_CATEGORY_MST, [categories[i].name, categories[i].name_en, categories[i].sorted, categories[i].min_cnt, categories[i].id]);
      }
    } catch (err) {
      throw err;
    }
  };
};

const insert_category_logic = (category: any) => {
  return async (conn: any) => {
    try {
      const categoryMstInfoawait = await excuteQuery(conn, INSERT_CATEGORY_MST, [category.name, category.name_en, Number(category.sorted), Number(category.min_cnt)])
      for (let i = 0; i < category.langs.length; i++) {
        await excuteQuery(conn, INSERT_CATEGORY_LANG_PACKAGE, [categoryMstInfoawait.insertId, category.langs[i].id, category.langs[i].flg]);
      }

      // 単元、章更新
      for (let i = 0; i < category.parts.length; i++) {
        if (category.parts[i].onDelete && !category.parts[i].id) {
          continue;
        }

        if (category.parts[i].onDelete) {
          //delete
          await excuteQuery(conn, DELETE_PART_MST, [new Date(), category.parts[i].id]);
          await excuteQuery(conn, DELETE_CHAPTER_MST, [new Date(), Number(category.parts[i].id)]);
        } else if (!category.parts[i].id) {
          //insert
          const insertInfo = await excuteQuery(conn, INSERT_PART_MST, [category.parts[i].name, category.parts[i].sorted, categoryMstInfoawait.insertId])
          for (let j = 0; j < category.parts[i].chapters.length; j++) {
            if (!category.parts[i].chapters[j].onDelete) {
              const obj = {
                name: category.parts[i].chapters[j].name,
                flg: category.parts[i].chapters[j].flg,
                part_id: insertInfo.insertId,
                sorted: j
              }
              await excuteQuery(conn, INSERT_CHAPTER_MST, [obj.name, obj.flg, obj.part_id, obj.sorted]);
            }
          }
        } else {
          //update
          await excuteQuery(conn, UPDATE_PART_MST, [category.parts[i].name, category.parts[i].sorted, category.parts[i].id])
          for (let j = 0; j < category.parts[i].chapters.length; j++) {
            if (category.parts[i].chapters[j].onDelete && !category.parts[i].chapters[j].id) {
              continue;
            }

            if (category.parts[i].chapters[j].onDelete) {
              //delete
              await excuteQuery(conn, DELETE_CHAPTER_MST, [new Date(), Number(category.parts[i].chapters[j].id)]);
            } else if (!category.parts[i].chapters[j].id) {
              //insert
              const obj = {
                name: category.parts[i].chapters[j].name,
                flg: category.parts[i].chapters[j].flg,
                part_id: category.parts[i].id,
                sorted: j
              }
              await excuteQuery(conn, INSERT_CHAPTER_MST, [obj.name, obj.flg, obj.part_id, obj.sorted]);
            } else {
              //update
              const obj = {
                name: category.parts[i].chapters[j].name,
                sorted: j,
                flg: category.parts[i].chapters[j].flg,
              };
              await excuteQuery(conn, UPDATE_CHAPTER_MST, [obj.name, obj.sorted, obj.flg, category.parts[i].chapters[j].id])
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
      await excuteQuery(conn, UPDATE_CATEGORY_MST, [category.name, category.name_en, category.sorted, category.min_cnt, category.id]);
      for (let i = 0; i < category.langs.length; i++) {
        //更新、削除
        await excuteQuery(conn, UPDATE_CATEGORY_LANG_PACKAGE, [ category.langs[i].flg, category.id, category.langs[i].id]);
      }

      // 単元、章更新
      for (let i = 0; i < category.parts.length; i++) {
        if (category.parts[i].onDelete && !category.parts[i].id) {
          continue;
        }

        if (category.parts[i].onDelete) {
          //delete
          await excuteQuery(conn, DELETE_PART_MST, [new Date(), category.parts[i].id]);
          await excuteQuery(conn, DELETE_CHAPTER_MST, [new Date(), Number(category.parts[i].id)]);
        } else if (!category.parts[i].id) {
          //insert
          const insertInfo = await excuteQuery(conn, INSERT_PART_MST, [category.parts[i].name, category.parts[i].sorted, category.id])
          for (let j = 0; j < category.parts[i].chapters.length; j++) {
            if (!category.parts[i].chapters[j].onDelete) {
              const obj = {
                name: category.parts[i].chapters[j].name,
                flg: category.parts[i].chapters[j].flg,
                part_id: insertInfo.insertId,
                sorted: j
              };
              await excuteQuery(conn, INSERT_CHAPTER_MST, [obj.name, obj.flg, obj.part_id, obj.sorted]);
            }
          }
        } else {
          //update
          await excuteQuery(conn, UPDATE_PART_MST, [category.parts[i].name, category.parts[i].sorted, category.parts[i].id])
          for (let j = 0; j < category.parts[i].chapters.length; j++) {
            if (category.parts[i].chapters[j].onDelete && !category.parts[i].chapters[j].id) {
              continue;
            }

            if (category.parts[i].chapters[j].onDelete) {
              //delete
              await excuteQuery(conn, DELETE_CHAPTER_MST, [new Date(), Number(category.parts[i].chapters[j].id)])
            } else if (!category.parts[i].chapters[j].id) {
              //insert
              const obj = {
                name: category.parts[i].chapters[j].name,
                flg: category.parts[i].chapters[j].flg,
                part_id: category.parts[i].id,
                sorted: j
              };
              await excuteQuery(conn, INSERT_CHAPTER_MST, [obj.name, obj.flg, obj.part_id, obj.sorted]);
            } else {
              //update
              const obj = {
                name: category.parts[i].chapters[j].name,
                sorted: j,
                flg: category.parts[i].chapters[j].flg,
              };
              await excuteQuery(conn, UPDATE_CHAPTER_MST, [obj.name, obj.sorted, obj.flg, category.parts[i].chapters[j].id]);
            }
          }
        }
      }
    } catch (err) {
      throw err;
    }
  };
}
