const SELECT_LANG_MST_BY_CATEGORYNAME = `
     SELECT LANG_MST.id
          , LANG_MST.name
          , LANG_MST.name_en
          , SUM(CASE WHEN CATEGORY_MST.id IS NOT NULL THEN 1 ELSE 0 END) as cnt
       FROM LANG_MST
  LEFT JOIN CATEGORY_LANG_PACKAGE
         ON LANG_MST.id = CATEGORY_LANG_PACKAGE.lang_id
        AND CATEGORY_LANG_PACKAGE.deleted_at IS NULL
  LEFT JOIN CATEGORY_MST
         ON CATEGORY_LANG_PACKAGE.category_id = CATEGORY_MST.id
        AND CATEGORY_MST.deleted_at IS NULL
        AND CATEGORY_MST.name_en = ?
   GROUP BY LANG_MST.id
          , LANG_MST.name
          , LANG_MST.name_en
`;
export const select_lang_mst_by_categoryname = async (conn: any, name: string) => {
  try {
    const [ rows ] = await conn?.execute(SELECT_LANG_MST_BY_CATEGORYNAME, [name]);
    return rows;
  } catch (err) {
    throw err;
  }
};
