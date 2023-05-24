// 単元、章のデータを取得する

const SELECT_ALL_PART_AND_CHAPTER = `
        SELECT DISTINCT
               PART_MST.id as id
             , PART_MST.name as name
             , PART_MST.sorted as sorted
             , CHAPTER_MST.id as chapter_id
             , CHAPTER_MST.name as chapter_name
             , CHAPTER_MST.sorted as chapter_sorted
             , CHAPTER_MST.flg as chapter_flg
             , CROSSWORD_MST.title 
             , Count(CROSSWORD_MST.id) OVER (PARTITION BY PART_MST.id) AS part_cnt
             , Count(CROSSWORD_MST.id) OVER (PARTITION BY PART_MST.id, CHAPTER_MST.id) AS chapter_cnt
          FROM PART_MST
    INNER JOIN CHAPTER_MST
            ON PART_MST.id = CHAPTER_MST.part_id
           AND PART_MST.deleted_at IS NULL
           AND CHAPTER_MST.deleted_at IS NULL
     LEFT JOIN CROSSWORD_MST
            ON PART_MST.id = CROSSWORD_MST.part_id
           AND CHAPTER_MST.id = CROSSWORD_MST.chapter_id
           AND CROSSWORD_MST.deleted_at IS NULL
      ORDER BY PART_MST.sorted
             , CHAPTER_MST.sorted
`;

export const select_all_part_chapter = async (conn: any) => {
  try {
    const [ rows ] = await conn.execute(SELECT_ALL_PART_AND_CHAPTER, []);
    return rows;
  } catch (err) {
    throw err;
  }
};
