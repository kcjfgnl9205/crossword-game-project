const INSERT_CATEGORY_MST = `INSERT CATEGORY_MST(name, name_en, sorted, min_cnt) VALUES(?, ?, ?, ?)`;
export const insert_category_mst = async (conn: any, obj: any) => {
  try {
    const [ rows ] = await conn?.execute(INSERT_CATEGORY_MST, [obj.name, obj.name_en, Number(obj.sorted), Number(obj.min_cnt)]);
    return rows;
  } catch (err) {
    throw err;
  }
};


const SELECT_CATEGORY_MST = `
        SELECT id
             , name
             , name_en
             , sorted
             , min_cnt
          FROM CATEGORY_MST
         WHERE deleted_at IS NULL
           AND sorted IS NOT NULL
      ORDER BY sorted
`;
export const select_category_mst = async (conn: any) => {
  try {
    const [ rows ] = await conn?.execute(SELECT_CATEGORY_MST, []);
    return rows;
  } catch (err) {
    throw err;
  }
};


const FIND_CATEGORY_MST_BY_SLUG = `
      SELECT id
           , name
           , name_en
           , sorted
           , min_cnt
        FROM CATEGORY_MST
       WHERE deleted_at IS NULL
         AND sorted IS NOT NULL
         AND name_en = ?
    ORDER BY sorted
`;
export const find_category_mst_by_slug = async (conn: any, slug: string) => {
  try {
    const [ rows ] = await conn?.execute(FIND_CATEGORY_MST_BY_SLUG, [slug]);
    return rows;
  } catch (err) {
    throw err;
  }
};


const DELETE_CATEGORY_MST = `
      UPDATE CATEGORY_MST
         SET deleted_at = ?
       WHERE id = ?
`;
export const delete_category_mst = async (conn: any, id: number) => {
  try {
    const [ rows ] = await conn?.execute(DELETE_CATEGORY_MST, [new Date(), id]);
    return rows;
  } catch (err) {
    throw err;
  }
};


const UPDATE_CATEGORY_MST = `
  UPDATE CATEGORY_MST
     SET name = ?
       , name_en = ?
       , sorted = ?
       , min_cnt = ?
   WHERE id = ?
`
export const update_category_mst = async (conn: any, obj: any) => {
  try {
    const [ rows ] = await conn?.execute(UPDATE_CATEGORY_MST, [obj.name, obj.name_en, obj.sorted, obj.min_cnt, obj.id]);
    return rows;
  } catch (err) {
    throw err;
  }
};

