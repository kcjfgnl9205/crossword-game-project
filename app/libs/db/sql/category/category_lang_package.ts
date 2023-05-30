const FIND_CATEGORY_LANG_PACKAGE = `
   SELECT id
        , category_id
        , lang_id
      FROM CATEGORY_LANG_PACKAGE
     WHERE category_id = ?
       AND lang_id = ?
`;
export const find_category_lang_package = async (conn: any, category_id: number, lang_id: number) => {
  try {
    const [ rows ] = await conn?.execute(FIND_CATEGORY_LANG_PACKAGE, [category_id, lang_id]);
    return rows;
  } catch (err) {
    throw err;
  }
};

const INSERT_CATEGORY_LANG_PACKAGE = "INSERT CATEGORY_LANG_PACKAGE(category_id, lang_id, deleted_at) VALUES (?, ?, ?)";
export const insert_category_lang_package = async (conn: any, category_id: number, lang: any) => {
  try {
    const [ rows ] = await conn?.execute(INSERT_CATEGORY_LANG_PACKAGE, [category_id, lang.id, lang.checked ? null : new Date()]);
    return rows;
  } catch (err) {
    throw err;
  }
};

const UPDATE_CATEGORY_LANG_PACKAGE = `
   UPDATE CATEGORY_LANG_PACKAGE
      SET deleted_at = ?
    WHERE category_id = ?
      AND lang_id = ?
`;
export const update_category_lang_package = async (conn: any, category_id: number, lang_id: number, checked: boolean) => {
  try {
    const [ rows ] = await conn?.execute(UPDATE_CATEGORY_LANG_PACKAGE, [ checked ? null : new Date(), category_id, lang_id]);
    return rows;
  } catch (err) {
    throw err;
  }
};


