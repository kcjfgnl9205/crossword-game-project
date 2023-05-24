const INSERT_CHAPTER_MST = 'INSERT INTO CHAPTER_MST(name, flg, part_id, sorted) VALUES(?, ?, ?, ?)';
export const insert_chapter_mst = async (conn: any, obj: any) => {
  try {
    const [ rows ] = await conn?.execute(INSERT_CHAPTER_MST, [obj.name, obj.flg, obj.part_id, obj.sorted]);
    return rows;
  } catch (err) {
    throw err;
  }
};


const DELETE_CHAPTER_MST = 'UPDATE CHAPTER_MST SET deleted_at = ? WHERE id = ?';
export const delete_chapter_mst = async (conn: any, id: number) => {
  try {
    const [ rows ] = await conn?.execute(DELETE_CHAPTER_MST, [new Date(), id]);
    return rows;
  } catch (err) {
    throw err;
  }
};


const UPDATE_CHAPTER_MST = 'UPDATE CHAPTER_MST SET name = ?, sorted = ?, flg = ? WHERE id = ?';
export const update_chapter_mst = async (conn: any, id: number, obj: any) => {
  try {
    const [ rows ] = await conn?.execute(UPDATE_CHAPTER_MST, [obj.name, obj.sorted, obj.flg, id]);
    return rows;
  } catch (err) {
    throw err;
  }
};
