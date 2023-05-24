const INSERT_CROSSWORD_DETAIL = 'INSERT INTO CROSSWORD_DETAIL(number, clue, hint, answer, x_coordinates, y_coordinates, crossword_id, direction) VALUES(?, ?, ?, ?, ?, ?, ?, ?)';
export const insert_crossword_detail = async (conn: any, obj: any) => {
  try {
    const [ rows ] = await conn?.execute(INSERT_CROSSWORD_DETAIL, [obj.number, obj.clue, obj.hint, obj.answer, obj.col, obj.row, obj.corssword_id, obj.direction]);
    return rows;
  } catch (err) {
    throw err;
  }
};


const DELETE_CROSSWORD_DETAIL = 'UPDATE CROSSWORD_DETAIL SET deleted_at = ? WHERE crossword_id = ?';
export const delete_crossword_detail = async (conn: any, id: number) => {
  try {
    const [ rows ] = await conn?.execute(DELETE_CROSSWORD_DETAIL, [new Date(), id]);
    return rows;
  } catch (err) {
    throw err;
  }
};
