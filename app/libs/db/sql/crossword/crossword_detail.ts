const INSERT_CROSSWORD_DETAIL = `
    INSERT INTO CROSSWORD_DETAIL(number, clue, hint, answer, x_coordinates, y_coordinates, crossword_id, direction)
         VALUES(?, ?, ?, ?, ?, ?, ?, ?)`;
export const insert_crossword_detail = async (conn: any, crossword_id: number, obj: any) => {
  try {
    const [ rows ] = await conn?.execute(INSERT_CROSSWORD_DETAIL, [obj.number, obj.clue, obj.hint, obj.answer, obj.col, obj.row, crossword_id, obj.direction]);
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


const UPDATE_CROSSWORD_DETAIL = `
  UPDATE CROSSWORD_DETAIL
     SET number = ?
       , clue = ?
       , hint = ?
       , answer = ?
       , x_coordinates = ?
       , y_coordinates = ?
       , direction = ?
   WHERE id = ?
     AND crossword_id = ?
`;
export const update_crossword_detail = async (conn: any, id: number, obj: any) => {
  try {
    const [ rows ] = await conn?.execute(UPDATE_CROSSWORD_DETAIL, [obj.number, obj.clue, obj.hint, obj.answer, obj.col, obj.row, obj.direction, id, obj.crossword_id]);
    return rows;
  } catch (err) {
    throw err;
  }
};
