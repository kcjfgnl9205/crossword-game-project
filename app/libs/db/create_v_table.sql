CREATE VIEW V_CROSSWORD_ALL_RESULT AS
        SELECT USER_MST.id as user_id
             , USER_MST.username as user_username
             , CATEGORY_MST.id as category_id
             , CATEGORY_MST.name as category_name
             , CATEGORY_MST.name_en as category_name_en
             , CATEGORY_MST.sorted as category_sorted
             , PART_MST.id as part_id
             , PART_MST.name as part_name
             , PART_MST.sorted as part_sorted
             , CHAPTER_MST.id as chapter_id
             , CHAPTER_MST.name as chapter_name
             , CHAPTER_MST.sorted as chapter_sorted
             , LANG_MST.id as lang_id
             , LANG_MST.name as lang_name
             , LANG_MST.name_en as lang_name_en
             , CROSSWORD_RESULT_MST.id as result_id
             , CROSSWORD_MST.id as crossword_id
             , CROSSWORD_MST.title as result_title
             , CROSSWORD_RESULT_MST.time_limit as result_time_limit
             , CROSSWORD_RESULT_MST.u_time_limit as result_u_time_limit
             , CROSSWORD_RESULT_MST.u_score as result_u_score
             , CROSSWORD_RESULT_MST.times as result_times
             , CROSSWORD_RESULT_DETAIL.id as result_detail_id
             , CROSSWORD_RESULT_DETAIL.clue as result_detail_clue
             , CROSSWORD_RESULT_DETAIL.answer as result_detail_answer
             , CROSSWORD_RESULT_DETAIL.direction as result_detail_direction
             , CROSSWORD_RESULT_DETAIL.u_hint as result_detail_u_hint
             , CASE WHEN CROSSWORD_RESULT_DETAIL.answer = CROSSWORD_RESULT_DETAIL.u_answer THEN TRUE ELSE FALSE END AS isCorrect
           FROM CATEGORY_MST
    INNER JOIN PART_MST
            ON CATEGORY_MST.id = PART_MST.category_id 
           AND PART_MST.deleted_at IS NULL
    INNER JOIN CHAPTER_MST
            ON PART_MST.id = CHAPTER_MST.part_id 
           AND CHAPTER_MST.deleted_at IS NULL
    INNER JOIN CROSSWORD_MST 
            ON CATEGORY_MST.id = CROSSWORD_MST.category_id
           AND PART_MST.id = CROSSWORD_MST.part_id
           AND CHAPTER_MST.id = CROSSWORD_MST.chapter_id
           AND CROSSWORD_MST.deleted_at IS NULL
     LEFT JOIN LANG_MST
            ON CROSSWORD_MST.lang_id = LANG_MST.id
     LEFT JOIN CROSSWORD_RESULT_MST
            ON CROSSWORD_MST.category_id = CROSSWORD_RESULT_MST.category_id
           AND CROSSWORD_MST.part_id = CROSSWORD_RESULT_MST.part_id
           AND CROSSWORD_MST.chapter_id = CROSSWORD_RESULT_MST.chapter_id
           AND CROSSWORD_MST.lang_id = CROSSWORD_RESULT_MST.lang_id
           AND CROSSWORD_MST.id = CROSSWORD_RESULT_MST.crossword_id
           AND CROSSWORD_RESULT_MST.deleted_at IS NULL
     LEFT JOIN CROSSWORD_RESULT_DETAIL
            ON CROSSWORD_RESULT_MST.id = CROSSWORD_RESULT_DETAIL.crossword_result_id
     LEFT JOIN USER_MST 
            ON USER_MST.id = CROSSWORD_RESULT_MST.user_id




CREATE VIEW V_CATEGORY_ALL_MST AS
    SELECT CATEGORY_MST.id as category_id
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
         , CATEGORY_LANG_PACKAGE.category_id as category_lang_package_category_id
         , CATEGORY_LANG_PACKAGE.flg as category_lang_package_flg
      FROM CATEGORY_MST
INNER JOIN PART_MST
        ON CATEGORY_MST.id = PART_MST.category_id 
INNER JOIN CHAPTER_MST
        ON PART_MST.id = CHAPTER_MST.part_id 
INNER JOIN CATEGORY_LANG_PACKAGE
        ON CATEGORY_MST.id = CATEGORY_LANG_PACKAGE.category_id 
INNER JOIN LANG_MST
        ON CATEGORY_LANG_PACKAGE.lang_id = LANG_MST.id
     WHERE CATEGORY_MST.deleted_at IS NULL
       AND PART_MST.deleted_at IS NULL
       AND CHAPTER_MST.deleted_at IS NULL
       AND CATEGORY_LANG_PACKAGE.deleted_at IS NULL
       AND LANG_MST.deleted_at IS NULL
