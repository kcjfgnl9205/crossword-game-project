const INSERT_CROSSWORD = `INSERT INTO CROSSWORD_MST(title, time_limit, category_id, part_id, chapter_id, lang_id) VALUES(?, ?, ?, ?, ?, ?)`;
export const insert_crossword_mst = async (conn: any, obj: any) => {
  try {
    const [ rows ] = await conn?.execute(INSERT_CROSSWORD, [obj.title, obj.time_limit, obj.category_id, obj.part_id, obj.chapter_id, obj.lang_id]);
    return rows;
  } catch (err) {
    throw err;
  }
};


const DELETE_CROSSWORD = "UPDATE CROSSWORD_MST SET deleted_at = ? WHERE id = ?"
export const delete_crossword_mst = async (conn: any, id: number) => {
  try {
    const [ rows ] = await conn?.execute(DELETE_CROSSWORD, [new Date(), id]);
    return rows;
  } catch (err) {
    throw err;
  }
};


const UPDATE_CROSSWORD = `
    UPDATE CROSSWORD_MST 
       SET title = ?
         , time_limit = ?
         , part_id = ?
         , chapter_id = ?
         , lang_id = ?
     WHERE id = ?
       AND category_id = ?
`;
export const update_crossword_mst = async (conn: any, id: number, obj: any) => {
  try {
    const [ rows ] = await conn?.execute(UPDATE_CROSSWORD, [obj.title, obj.time_limit, obj.part_id, obj.chapter_id, obj.lang_id, id, obj.category_id]);
    return rows;
  } catch (err) {
    throw err;
  }
};



const SELECT_CROSSWORD_MST_BY_CATEGORY_ID = `
        SELECT PART_MST.id as part_id
             , PART_MST.name as part_name
             , CHAPTER_MST.id as chapter_id
             , CHAPTER_MST.name as chapter_name
             , CROSSWORD_MST.id as crossword_id
             , CROSSWORD_MST.title as crossword_title
             , CROSSWORD_MST.time_limit as crossword_time_limit
             , LANG_MST.id as lang_id
             , LANG_MST.name as lang_name
             , LANG_MST.name_en as lang_name_en
             , COUNT(CROSSWORD_DETAIL.id) as cnt
          FROM CATEGORY_MST
    INNER JOIN PART_MST
            ON CATEGORY_MST.id = PART_MST.category_id 
           AND PART_MST.deleted_at IS NULL
    INNER JOIN CHAPTER_MST
            ON PART_MST.id = CHAPTER_MST.part_id 
           AND CHAPTER_MST.deleted_at IS NULL
     LEFT JOIN CROSSWORD_MST
            ON CATEGORY_MST.id = CROSSWORD_MST.category_id
           AND PART_MST.id = CROSSWORD_MST.part_id
           AND CHAPTER_MST.id = CROSSWORD_MST.chapter_id
           AND CROSSWORD_MST.deleted_at IS NULL
     LEFT JOIN LANG_MST
            ON CROSSWORD_MST.lang_id = LANG_MST.id
     LEFT JOIN CROSSWORD_DETAIL
            ON CROSSWORD_MST.id = CROSSWORD_DETAIL.crossword_id 
           AND CROSSWORD_DETAIL.deleted_at IS NULL
         WHERE CATEGORY_MST.id = ?
           AND CROSSWORD_MST.id IS NOT NULL
      GROUP BY PART_MST.id 
             , PART_MST.name 
             , CHAPTER_MST.id
             , CHAPTER_MST.name 
             , CROSSWORD_MST.id 
             , CROSSWORD_MST.title
             , CROSSWORD_MST.time_limit
             , LANG_MST.id 
             , LANG_MST.name
             , LANG_MST.name_en
      ORDER BY PART_MST.sorted
             , CHAPTER_MST.sorted 
             , CROSSWORD_MST.id
             , LANG_MST.id
`;
export const select_crosswords_by_category_id = async (conn: any, id: number) => {
  try {
    const [ rows ] = await conn?.execute(SELECT_CROSSWORD_MST_BY_CATEGORY_ID, [id]);
    return rows;
  } catch (err) {
    throw err;
  }
};
