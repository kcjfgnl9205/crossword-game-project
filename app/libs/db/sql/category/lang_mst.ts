import { LangCategoryType } from "@/app/types";

const SELECT_LANG_MST = 'SELECT id, name, name_en FROM LANG_MST WHERE deleted_at IS NULL ORDER BY id';
export const select_lang_mst = async (conn: any) => {
  try {
    const [ rows ] = await conn?.execute(SELECT_LANG_MST, []);
    return rows;
  } catch (err) {
    throw err;
  }
};

const UPDATE_LANG_MST = 'UPDATE LANG_MST SET name = ? WHERE id = ?';
export const update_lang_mst = async (conn: any, lang: LangCategoryType) => {
  try {
    const [ rows ] = await conn?.execute(UPDATE_LANG_MST, [lang.name, lang.id]);
    return rows;
  } catch (err) {
    throw err;
  }
};
