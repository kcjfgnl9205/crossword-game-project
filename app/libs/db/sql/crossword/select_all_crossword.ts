// クロスワードリスト

const SELECT_ALL_CROSSWORD = `
        SELECT PART_MST.id as part_id
             , PART_MST.name as part_name
             , CHAPTER_MST.id as chapter_id
             , CHAPTER_MST.name as chapter_name
             , CHAPTER_MST.flg
             , CROSSWORD_MST_DETAIL_MAP.id as crossword_id
             , CROSSWORD_MST.title
             , LANG_MST.name as lang_name
             , COUNT(CROSSWORD_DETAIL.id) AS cnt
          FROM PART_MST
    INNER JOIN CHAPTER_MST
            ON PART_MST.id = CHAPTER_MST.part_id
           AND PART_MST.deleted_at IS NULL
           AND CHAPTER_MST.deleted_at IS NULL
     LEFT JOIN CROSSWORD_MST
            ON PART_MST.id = CROSSWORD_MST.part_id
           AND CHAPTER_MST.id = CROSSWORD_MST.chapter_id
           AND CROSSWORD_MST.deleted_at IS NULL
     LEFT JOIN CROSSWORD_MST_DETAIL_MAP
            ON CROSSWORD_MST.id = CROSSWORD_MST_DETAIL_MAP.crossword_id
           AND CROSSWORD_MST_DETAIL_MAP.deleted_at IS NULL
     LEFT JOIN LANG_MST
            ON CROSSWORD_MST_DETAIL_MAP.lang_id = LANG_MST.id
           AND LANG_MST.deleted_at IS NULL
     LEFT JOIN CROSSWORD_DETAIL
            ON CROSSWORD_MST_DETAIL_MAP.id = CROSSWORD_DETAIL.crossword_id
           AND CROSSWORD_DETAIL.deleted_at IS NULL
         WHERE CROSSWORD_MST_DETAIL_MAP.id IS NOT NULL
      GROUP BY PART_MST.id
             , PART_MST.name
             , CHAPTER_MST.id
             , CHAPTER_MST.name
             , CHAPTER_MST.flg
             , CROSSWORD_MST_DETAIL_MAP.id
             , CROSSWORD_MST.title
             , LANG_MST.name
      ORDER BY PART_MST.id
             , CHAPTER_MST.id
             , LANG_MST.id
`;

export const select_all_crossword = async (conn: any) => {
  try {
    const [ rows ] = await conn?.execute(SELECT_ALL_CROSSWORD);
    return rows;
  } catch (err) {
    throw err;
  }
};
