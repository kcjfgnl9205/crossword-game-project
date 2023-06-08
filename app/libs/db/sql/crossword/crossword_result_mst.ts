const INSERT_CROSSWORD_RESULT = `
  INSERT INTO CROSSWORD_RESULT_MST(crossword_id, title, time_limit, u_time_limit, u_score, category_id, part_id, chapter_id, lang_id, user_id, times)
  VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, (SELECT maxtimes.times FROM (SELECT COALESCE(MAX(times), 0) + 1 AS times FROM CROSSWORD_RESULT_MST WHERE category_id = ? AND part_id = ? AND chapter_id = ? AND lang_id = ? AND user_id = ?) AS maxtimes ))
`;
export const insert_crossword_result_mst = async (conn: any, obj: any) => {
  try {
    const [ rows ] = await conn?.execute(INSERT_CROSSWORD_RESULT, [obj.crossword_id, obj.title, obj.time_limit, obj.u_time_limit, obj.u_score, obj.category_id, obj.part_id, obj.chapter_id, obj.lang_id, obj.user_id, obj.category_id, obj.part_id, obj.chapter_id, obj.lang_id, obj.user_id]);
    return rows;
  } catch (err) {
    throw err;
  }
};
