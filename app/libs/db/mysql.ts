import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  database: process.env.MYSQL_DATABASE,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  connectionLimit: 50,
});

export const getConnection = async () => {
  try {
    const conn = await pool.getConnection();
    return conn;
  } catch (error: any) {
    console.error(`connection error : ${error.message}`);
    return null;
  }
};

export const releaseConnection = async (conn: any) => {
  try {
    if (conn) {
      await conn.release();
    }
  } catch (error: any) {
    console.error(`release error : ${error.message}`);
  }
};

export const transaction = async (logic: any) => {
  let conn = null;
  try {
    conn = await getConnection();
    await conn?.beginTransaction();

    const result = await logic(conn);

    await conn?.commit();
    return result;
  } catch (err) {
    if (conn) {
      conn.rollback();
    }
    throw err;
  } finally {
    if (conn) {
      await releaseConnection(conn);
    }
  }
};

export const excuteQuery = async (conn: any, sql: string, params: Array<any>) => {
  try {
    const [ rows ] = await conn?.execute(sql, params);
    return rows;
  } catch (err) {
    throw err;
  }
};
