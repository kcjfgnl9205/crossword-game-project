const FIND_CROSSWORD_MAP = 'SELECT id, crossword_id, lang_id, time_limit FROM CROSSWORD_MST_DETAIL_MAP WHERE id = ? AND deleted_at IS NULL';
export const find_crossword_map = async (conn: any, id: number) => {
  try {
    const [ rows ] = await conn?.execute(FIND_CROSSWORD_MAP, [id]);
    return rows;
  } catch (err) {
    throw err;
  }
};


const INSERT_CROSSWORD_MAP = 'INSERT INTO CROSSWORD_MST_DETAIL_MAP(crossword_id, lang_id, time_limit) VALUES(?, ?, ?)';
export const insert_crossword_map = async (conn: any, obj: any) => {
  try {
    const [ rows ] = await conn?.execute(INSERT_CROSSWORD_MAP, [obj.crossword_mst_id, obj.lang_id, obj.time_limit]);
    return rows;
  } catch (err) {
    throw err;
  }
};


const DELETE_CROSSWORD_MAP = 'UPDATE CROSSWORD_MST_DETAIL_MAP SET deleted_at = ? WHERE id = ?';
export const delete_crossword_map = async (conn: any, id: number) => {
  try {
    const [ rows ] = await conn?.execute(DELETE_CROSSWORD_MAP, [new Date(), id]);
    return rows;
  } catch (err) {
    throw err;
  }
};


const UPDATE_CROSSWORD_MAP = 'UPDATE CROSSWORD_MST_DETAIL_MAP SET lang_id = ?, time_limit = ? WHERE id = ?';
export const update_crossword_map = async (conn: any, id: number, obj: any) => {
  try {
    const [ rows ] = await conn?.execute(UPDATE_CROSSWORD_MAP, [obj.lang_id, obj.time_limit, id]);
    return rows;
  } catch (err) {
    throw err;
  }
};

