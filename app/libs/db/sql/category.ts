// カテゴリーデータを取得する
export const SELECT_CATEGORY_MST = `
      SELECT *
        FROM V_CATEGORY_ALL_MST
    ORDER BY category_sorted
           , part_sorted
           , chapter_sorted
           , lang_id
`;

// カテゴリーデータを登録する
export const INSERT_CATEGORY_MST = `INSERT CATEGORY_MST(name, name_en, sorted) VALUES(?, ?, ?)`;

// カテゴリーデータを修正する
export const UPDATE_CATEGORY_MST = `
    UPDATE CATEGORY_MST
       SET name = ?
         , name_en = ?
         , sorted = ?
     WHERE id = ?
`;

// カテゴリーデータを削除する
export const DELETE_CATEGORY_MST = `
  UPDATE CATEGORY_MST
     SET deleted_at = ?
   WHERE id = ?
`;


// 単元データを登録する
export const INSERT_PART_MST = `INSERT INTO PART_MST(name, sorted, category_id) VALUES(?, ?, ?)`;

// 単元データを修正する
export const UPDATE_PART_MST = `
    UPDATE PART_MST
       SET name = ?
         , sorted = ?
     WHERE id = ?
`;

// 単元データを削除する
export const DELETE_PART_MST = `
    UPDATE PART_MST
       SET deleted_at = ?
     WHERE id = ?
`;

// 章データを登録する
export const INSERT_CHAPTER_MST = `INSERT INTO CHAPTER_MST(name, title, flg, part_id, sorted) VALUES(?, ?, ?, ?, ?)`;

// 章データを修正する
export const UPDATE_CHAPTER_MST = `
    UPDATE CHAPTER_MST
       SET name = ?
         , title = ?
         , sorted = ?
         , flg = ?
     WHERE id = ?
`;

// 章データを削除する
export const DELETE_CHAPTER_MST = `
    UPDATE CHAPTER_MST 
       SET deleted_at = ?
     WHERE id = ?
`;

// カテゴリー別の言語情報を登録する
export const INSERT_CATEGORY_LANG_PACKAGE = `INSERT CATEGORY_LANG_PACKAGE (category_id, lang_id, flg) VALUES (?, ?, ?)`;

// カテゴリー別の言語情報を更新する
export const UPDATE_CATEGORY_LANG_PACKAGE = `
   UPDATE CATEGORY_LANG_PACKAGE
      SET flg = ?
    WHERE category_id = ?
      AND lang_id = ?
`;

// 言語カテゴリーリストを取得する
export const SELECT_LANG_MST = `
  SELECT id
       , name
       , name_en
       , False as flg
    FROM LANG_MST
`