const INSERT_PART_MST = 'INSERT INTO PART_MST(name, sorted, category_id) VALUES(?, ?, ?)';
export const insert_part_mst = async (conn: any, category_id: number, obj: any) => {
  try {
    const [ rows ] = await conn?.execute(INSERT_PART_MST, [obj.name, obj.sorted, category_id]);
    return rows;
  } catch (err) {
    throw err;
  }
};


const DELETE_PART_MST = 'UPDATE PART_MST SET deleted_at = ? WHERE id = ?';
export const delete_part_mst = async (conn: any, id: number) => {
  try {
    const [ rows ] = await conn?.execute(DELETE_PART_MST, [new Date(), id]);
    return rows;
  } catch (err) {
    throw err;
  }
};


const UPDATE_PART_MST = 'UPDATE PART_MST SET name = ?, sorted = ? WHERE id = ?';
export const update_part_mst = async (conn: any, id: number, obj: any) => {
  try {
    const [ rows ] = await conn?.execute(UPDATE_PART_MST, [obj.name, obj.sorted, id]);
    return rows;
  } catch (err) {
    throw err;
  }
};


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
          FROM CATEGORY_MST 
    INNER JOIN PART_MST
            ON CATEGORY_MST.id = PART_MST.category_id
    INNER JOIN CHAPTER_MST
            ON PART_MST.id = CHAPTER_MST.part_id
           AND PART_MST.deleted_at IS NULL
           AND CHAPTER_MST.deleted_at IS NULL
     LEFT JOIN CROSSWORD_MST
            ON PART_MST.id = CROSSWORD_MST.part_id
           AND CHAPTER_MST.id = CROSSWORD_MST.chapter_id
           AND CROSSWORD_MST.deleted_at IS NULL
         WHERE CATEGORY_MST.name_en = ?
      ORDER BY PART_MST.sorted
             , CHAPTER_MST.sorted
`;
export const select_all_part_chapter = async (conn: any, name: string) => {
  try {
    const [ rows ] = await conn?.execute(SELECT_ALL_PART_AND_CHAPTER, [name]);
    return rows;
  } catch (err) {
    throw err;
  }
};