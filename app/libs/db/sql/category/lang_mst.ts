const SELECT_LANG_MST = 'SELECT * FROM LANG_MST WHERE deleted_at IS NULL ORDER BY id';
export const select_lang_mst = async (conn: any) => {
  try {
    const [ rows ] = await conn.execute(SELECT_LANG_MST, []);
    return rows;
  } catch (err) {
    throw err;
  }
};
