const INSERT_USER_MST = 'INSERT INTO USER_MST(username, password, email, authority) VALUES(?, ?, ?, ?)';
export const insert_user_mst = async (conn: any, obj: any) => {
  try {
    const [ rows ] = await conn?.execute(INSERT_USER_MST, [obj.username, obj.password, obj.email, obj.authority]);
    return rows;
  } catch (err) {
    throw err;
  }
};


const SELECT_USER_BY_USERNAME = 'SELECT * FROM USER_MST WHERE username = ?';
export const fint_user_mst_by_username = async (conn: any, username: string) => {
  try {
    const [ rows ] = await conn?.execute(SELECT_USER_BY_USERNAME, [username]);
    return rows;
  } catch (err) {
    throw err;
  }
};
