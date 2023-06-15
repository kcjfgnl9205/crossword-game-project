// ユーザー登録(会員登録)するSQL
export const INSERT_USER_MST = `
  INSERT INTO USER_MST(username, password, email, authority)
                VALUES(?, ?, ?, ?)`;


// usernameに該当するユーザーが存在するかチェックする
export const SELECT_USER_BY_USERNAME = `
    SELECT *
      FROM USER_MST
     WHERE username = ?
       AND deleted_at IS NULL
`;


// 全ての一般ユーザーを検索する
export const SELECT_USER_MST = `
    SELECT *
      FROM USER_MST
     WHERE authority = 0
       AND deleted_at IS NULL
`;
