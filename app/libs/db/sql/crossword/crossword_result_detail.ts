const INSERT_CROSSWORD_RESULT_DETAIL = `
  INSERT INTO CROSSWORD_RESULT_DETAIL(crossword_result_id, number, clue, hint, answer, x_coordinates, y_coordinates, direction, u_hint, u_answer)
  VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
`;
export const insert_crossword_result_detail = async (conn: any, id: number, obj: any) => {
  try {
    const [ rows ] = await conn?.execute(INSERT_CROSSWORD_RESULT_DETAIL, [id, obj.number, obj.clue, obj.hint, obj.answer, obj.x_coordinates, obj.y_coordinates, obj.direction, obj.u_hint, obj.u_answer]);
    return rows;
  } catch (err) {
    throw err;
  }
};
