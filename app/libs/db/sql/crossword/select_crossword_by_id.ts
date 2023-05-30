// クロスワードゲーム

const SELECT_CROSSWORD_BY_ID = `
        SELECT CROSSWORD_MST.id
             , CROSSWORD_MST.title
             , CROSSWORD_MST.time_limit
             , CATEGORY_MST.id as category_id
             , CATEGORY_MST.name as category_name
             , CATEGORY_MST.name_en as category_name_en
             , CATEGORY_MST.sorted as category_sorted
             , CATEGORY_MST.min_cnt as category_min_cnt
             , PART_MST.id as part_id
             , PART_MST.name as part_name
             , PART_MST.sorted as part_sorted
             , CHAPTER_MST.id as chapter_id
             , CHAPTER_MST.name as chapter_name 
             , CHAPTER_MST.sorted as chapter_sorted
             , CHAPTER_MST.flg as chapter_flg 
             , LANG_MST.id as lang_id
             , LANG_MST.name as lang_name
             , LANG_MST.name_en as lang_name_en
             , CROSSWORD_DETAIL.id as question_id
             , CROSSWORD_DETAIL.number as question_number
             , CROSSWORD_DETAIL.clue
             , CROSSWORD_DETAIL.hint
             , CROSSWORD_DETAIL.answer
             , CROSSWORD_DETAIL.x_coordinates 
             , CROSSWORD_DETAIL.y_coordinates 
             , CROSSWORD_DETAIL.direction
          FROM CROSSWORD_MST
    INNER JOIN CATEGORY_MST
            ON CROSSWORD_MST.category_id = CATEGORY_MST.id
           AND CATEGORY_MST.deleted_at IS NULL
    INNER JOIN PART_MST
            ON CROSSWORD_MST.part_id = PART_MST.id
           AND PART_MST.deleted_at IS NULL
    INNER JOIN CHAPTER_MST
            ON CROSSWORD_MST.chapter_id  = CHAPTER_MST.id
           AND CHAPTER_MST.deleted_at IS NULL
    INNER JOIN LANG_MST
            ON CROSSWORD_MST.lang_id  = LANG_MST.id
           AND LANG_MST.deleted_at IS NULL
     LEFT JOIN CROSSWORD_DETAIL
            ON CROSSWORD_MST.id = CROSSWORD_DETAIL.crossword_id
           AND CROSSWORD_DETAIL.deleted_at IS NULL
         WHERE CROSSWORD_MST.id = ?
      ORDER BY CROSSWORD_DETAIL.id
`;

export const select_crossword_by_id = async (conn: any, id: number) => {
  try {
    const [ rows ] = await conn?.execute(SELECT_CROSSWORD_BY_ID, [id]);
    return rows;
  } catch (err) {
    throw err;
  }
};
