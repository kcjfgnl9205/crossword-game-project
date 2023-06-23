// カテゴリーに存在するクロスワードゲームリスト
export const SELECT_CROSSWORD_MST_BY_CATEGORY = `
          SELECT V_CATEGORY_ALL_MST.category_id
               , V_CATEGORY_ALL_MST.category_name
               , V_CATEGORY_ALL_MST.category_name_en
               , V_CATEGORY_ALL_MST.part_id 
               , V_CATEGORY_ALL_MST.part_name 
               , V_CATEGORY_ALL_MST.chapter_id
               , V_CATEGORY_ALL_MST.chapter_name 
               , V_CATEGORY_ALL_MST.lang_id 
               , V_CATEGORY_ALL_MST.lang_name
               , V_CATEGORY_ALL_MST.lang_name_en
               , CROSSWORD_MST.id as crossword_id
               , CROSSWORD_MST.title as crossword_title
               , CROSSWORD_MST.time_limit as crossword_time_limit
               , COUNT(CROSSWORD_DETAIL.id) as cnt
            FROM V_CATEGORY_ALL_MST
       LEFT JOIN CROSSWORD_MST
              ON V_CATEGORY_ALL_MST.category_id = CROSSWORD_MST.category_id
             AND V_CATEGORY_ALL_MST.part_id = CROSSWORD_MST.part_id
             AND V_CATEGORY_ALL_MST.chapter_id = CROSSWORD_MST.chapter_id
             AND V_CATEGORY_ALL_MST.lang_id = CROSSWORD_MST.lang_id
             AND CROSSWORD_MST.deleted_at IS NULL
       LEFT JOIN CROSSWORD_DETAIL
              ON CROSSWORD_MST.id = CROSSWORD_DETAIL.crossword_id 
             AND CROSSWORD_DETAIL.deleted_at IS NULL
           WHERE V_CATEGORY_ALL_MST.category_name_en = ?
             AND CROSSWORD_MST.id IS NOT NULL
        GROUP BY V_CATEGORY_ALL_MST.category_id
               , V_CATEGORY_ALL_MST.category_name
               , V_CATEGORY_ALL_MST.category_name_en
               , V_CATEGORY_ALL_MST.part_id 
               , V_CATEGORY_ALL_MST.part_name 
               , V_CATEGORY_ALL_MST.chapter_id
               , V_CATEGORY_ALL_MST.chapter_name 
               , V_CATEGORY_ALL_MST.lang_id 
               , V_CATEGORY_ALL_MST.lang_name
               , V_CATEGORY_ALL_MST.lang_name_en
               , CROSSWORD_MST.id 
               , CROSSWORD_MST.title
               , CROSSWORD_MST.time_limit
        ORDER BY V_CATEGORY_ALL_MST.category_sorted
               , V_CATEGORY_ALL_MST.part_sorted  
               , V_CATEGORY_ALL_MST.chapter_sorted
               , V_CATEGORY_ALL_MST.lang_id
               , CROSSWORD_MST.id
`;

// クロスワードゲーム
export const SELECT_CROSSWORD_BY_ID = `
          SELECT DISTINCT
                 CROSSWORD_MST.id
               , CROSSWORD_MST.title
               , CROSSWORD_MST.time_limit
               , V_CATEGORY_ALL_MST.category_id
               , V_CATEGORY_ALL_MST.category_name
               , V_CATEGORY_ALL_MST.category_name_en
               , V_CATEGORY_ALL_MST.category_sorted
               , V_CATEGORY_ALL_MST.part_id
               , V_CATEGORY_ALL_MST.part_name
               , V_CATEGORY_ALL_MST.part_sorted
               , V_CATEGORY_ALL_MST.chapter_id
               , V_CATEGORY_ALL_MST.chapter_name 
               , V_CATEGORY_ALL_MST.chapter_sorted
               , V_CATEGORY_ALL_MST.lang_id
               , V_CATEGORY_ALL_MST.lang_name
               , V_CATEGORY_ALL_MST.lang_name_en
               , CROSSWORD_DETAIL.id as question_id
               , CROSSWORD_DETAIL.clue
               , CROSSWORD_DETAIL.hint
               , CROSSWORD_DETAIL.answer
            FROM CROSSWORD_MST
      INNER JOIN V_CATEGORY_ALL_MST
              ON CROSSWORD_MST.category_id = V_CATEGORY_ALL_MST.category_id
             AND CROSSWORD_MST.part_id = V_CATEGORY_ALL_MST.part_id
             AND CROSSWORD_MST.chapter_id = V_CATEGORY_ALL_MST.chapter_id
             AND CROSSWORD_MST.lang_id = V_CATEGORY_ALL_MST.lang_id
       LEFT JOIN CROSSWORD_DETAIL
              ON CROSSWORD_MST.id = CROSSWORD_DETAIL.crossword_id
             AND CROSSWORD_DETAIL.deleted_at IS NULL
           WHERE CROSSWORD_MST.id = ?
             AND V_CATEGORY_ALL_MST.category_name_en = ?
        ORDER BY CROSSWORD_DETAIL.id
`;


// クロスワードゲーム質問データ取得
export const SELECT_CROSSWORD_DETAIL_BY_CROSSWORD_ID = `
  SELECT id
    FROM CROSSWORD_DETAIL
   WHERE deleted_at IS NULL
     AND crossword_id = ?
`;

// クロスワードゲームを登録する
export const INSERT_CROSSWORD = `INSERT INTO CROSSWORD_MST(title, time_limit, category_id, part_id, chapter_id, lang_id) VALUES(?, ?, ?, ?, ?, ?)`;
export const INSERT_CROSSWORD_DETAIL = `INSERT INTO CROSSWORD_DETAIL(clue, hint, answer, crossword_id) VALUES(?, ?, ?, ?)`;

// クロスワードゲームを削除する
export const DELETE_CROSSWORD = `
    UPDATE CROSSWORD_MST
       SET deleted_at = ?
     WHERE id = ?
`
export const DELETE_CROSSWORD_DETAIL = `
    UPDATE CROSSWORD_DETAIL
       SET deleted_at = ?
     WHERE id = ?
`;

// クロスワードゲームを修正する
export const UPDATE_CROSSWORD = `
    UPDATE CROSSWORD_MST 
       SET title = ?
         , time_limit = ?
         , part_id = ?
         , chapter_id = ?
         , lang_id = ?
     WHERE id = ?
       AND category_id = ?
`;
export const UPDATE_CROSSWORD_DETAIL = `
    UPDATE CROSSWORD_DETAIL
       SET clue = ?
         , hint = ?
         , answer = ?
     WHERE id = ?
       AND crossword_id = ?
`;
