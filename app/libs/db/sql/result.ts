// クロスワード結果データを登録する
export const INSERT_CROSSWORD_RESULT = `
  INSERT INTO CROSSWORD_RESULT_MST(crossword_id, title, time_limit, u_time_limit, u_score, category_id, part_id, chapter_id, lang_id, user_id, times)
  VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, (SELECT maxtimes.times FROM (SELECT COALESCE(MAX(times), 0) + 1 AS times FROM CROSSWORD_RESULT_MST WHERE category_id = ? AND part_id = ? AND chapter_id = ? AND lang_id = ? AND user_id = ?) AS maxtimes ))
`;
export const INSERT_CROSSWORD_RESULT_DETAIL = `
  INSERT INTO CROSSWORD_RESULT_DETAIL(crossword_result_id, clue, hint, answer, u_hint, u_answer)
  VALUES(?, ?, ?, ?, ?, ?)
`;



export const SELECT_V_CROSSWORD_RESULT_BY_ID = `
    SELECT * 
      FROM V_CROSSWORD_ALL_RESULT
     WHERE category_name_en = ?
       AND crossword_id = ?
  ORDER BY category_sorted
         , part_sorted
         , chapter_sorted
         , result_id
         , lang_id
`;

export const SELECT_V_CROSSWORD_RESULT = `
    SELECT * 
      FROM V_CROSSWORD_ALL_RESULT
     WHERE user_username = ?
       AND category_name_en = ?
  ORDER BY category_sorted
         , part_sorted
         , chapter_sorted
         , result_id
         , lang_id
`;

export const SELECT_V_CROSSWORD_MAX_RESULT = `
                  WITH RANK_TABLE AS (
                    SELECT category_id
                         , part_id
                         , chapter_id
                         , lang_id
                         , result_id
                         , result_times
                         , user_id
                         , COUNT(*) AS total_questions
                         , SUM(CASE WHEN isCorrect = true THEN 1 ELSE 0 END) AS total_correct_answers
                         , row_number() OVER (PARTITION BY category_id
                                                         , part_id
                                                         , chapter_id
                                                         , lang_id
                                                         , user_id
                                                  ORDER BY COUNT(CASE WHEN isCorrect = true THEN 1 END) DESC) AS rank_col
                      FROM V_CROSSWORD_ALL_RESULT
                  GROUP BY category_id
                         , part_id
                         , chapter_id
                         , lang_id
                         , result_id
                         , result_times
                         , user_id
                  ), USER_RESULT AS (
                    SELECT V_CROSSWORD_ALL_RESULT.user_id
                         , V_CROSSWORD_ALL_RESULT.user_username
                         , V_CROSSWORD_ALL_RESULT.category_id
                         , V_CROSSWORD_ALL_RESULT.category_name
                         , V_CROSSWORD_ALL_RESULT.category_name_en
                         , V_CROSSWORD_ALL_RESULT.part_id
                         , V_CROSSWORD_ALL_RESULT.part_name
                         , V_CROSSWORD_ALL_RESULT.chapter_id
                         , V_CROSSWORD_ALL_RESULT.chapter_name
                         , V_CROSSWORD_ALL_RESULT.chapter_title
                         , V_CROSSWORD_ALL_RESULT.lang_id
                         , V_CROSSWORD_ALL_RESULT.lang_name
                         , V_CROSSWORD_ALL_RESULT.lang_name_en
                         , V_CROSSWORD_ALL_RESULT.result_id
                         , RANK_TABLE.total_questions
                         , RANK_TABLE.total_correct_answers
                      FROM V_CROSSWORD_ALL_RESULT
                INNER JOIN RANK_TABLE 
                        ON V_CROSSWORD_ALL_RESULT.category_id = RANK_TABLE.category_id
                       AND V_CROSSWORD_ALL_RESULT.part_id = RANK_TABLE.part_id
                       AND V_CROSSWORD_ALL_RESULT.chapter_id = RANK_TABLE.chapter_id
                       AND V_CROSSWORD_ALL_RESULT.lang_id  = RANK_TABLE.lang_id
                       AND V_CROSSWORD_ALL_RESULT.result_id = RANK_TABLE.result_id
                       AND V_CROSSWORD_ALL_RESULT.result_times = RANK_TABLE.result_times
                     WHERE V_CROSSWORD_ALL_RESULT.user_username = ?
                       AND rank_col = 1
                  ), SHOW_CATEGORY AS (
                    SELECT V_CATEGORY_ALL_MST.category_id
                      FROM V_CATEGORY_ALL_MST
                 LEFT JOIN USER_RESULT
                       ON V_CATEGORY_ALL_MST.category_id = USER_RESULT.category_id
                      AND V_CATEGORY_ALL_MST.part_id = USER_RESULT.part_id
                      AND V_CATEGORY_ALL_MST.chapter_id = USER_RESULT.chapter_id
                      AND V_CATEGORY_ALL_MST.lang_id  = USER_RESULT.lang_id
                 GROUP BY V_CATEGORY_ALL_MST.category_id
                   HAVING COUNT(USER_RESULT.result_id) > 1
                  )
            SELECT V_CATEGORY_ALL_MST.category_id
                 , V_CATEGORY_ALL_MST.category_name
                 , V_CATEGORY_ALL_MST.category_name_en
                 , V_CATEGORY_ALL_MST.category_sorted
                 , V_CATEGORY_ALL_MST.part_id 
                 , V_CATEGORY_ALL_MST.part_name
                 , V_CATEGORY_ALL_MST.part_sorted
                 , V_CATEGORY_ALL_MST.chapter_id
                 , V_CATEGORY_ALL_MST.chapter_name 
                 , V_CATEGORY_ALL_MST.chapter_title
                 , V_CATEGORY_ALL_MST.chapter_sorted
                 , V_CATEGORY_ALL_MST.lang_id
                 , V_CATEGORY_ALL_MST.lang_name
                 , V_CATEGORY_ALL_MST.lang_name_en
                 , USER_RESULT.result_id
                 , USER_RESULT.total_questions
                 , USER_RESULT.total_correct_answers
              FROM V_CATEGORY_ALL_MST
        INNER JOIN SHOW_CATEGORY
                ON V_CATEGORY_ALL_MST.category_id = SHOW_CATEGORY.category_id
         LEFT JOIN USER_RESULT
                ON V_CATEGORY_ALL_MST.category_id = USER_RESULT.category_id
               AND V_CATEGORY_ALL_MST.part_id = USER_RESULT.part_id
               AND V_CATEGORY_ALL_MST.chapter_id = USER_RESULT.chapter_id
               AND V_CATEGORY_ALL_MST.lang_id  = USER_RESULT.lang_id
             WHERE V_CATEGORY_ALL_MST.category_lang_package_flg = 1
          ORDER BY V_CATEGORY_ALL_MST.category_sorted
                 , V_CATEGORY_ALL_MST.part_sorted
                 , V_CATEGORY_ALL_MST.chapter_sorted
                 , V_CATEGORY_ALL_MST.lang_id
                 , USER_RESULT.result_id
`;
