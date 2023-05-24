const INSERT_CROSSWORD = 'INSERT INTO CROSSWORD_MST(title, part_id, chapter_id) VALUES(?, ?, ?)';
export const insert_crossword_mst = async (conn: any, obj: any) => {
  try {
    const [ rows ] = await conn.execute(INSERT_CROSSWORD, [obj.title, obj.part_id, obj.chapter_id]);
    return rows;
  } catch (err) {
    throw err;
  }
};


const DELETE_CROSSWORD = "UPDATE CROSSWORD_MST SET deleted_at = ? WHERE id = ?"
export const delete_crossword_mst = async (conn: any, id: number) => {
  try {
    const [ rows ] = await conn.execute(DELETE_CROSSWORD, [new Date(), id]);
    return rows;
  } catch (err) {
    throw err;
  }
};
