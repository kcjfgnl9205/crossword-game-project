import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  database: process.env.MYSQL_DATABASE,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  connectionLimit: 10,
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
    await conn.release();
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
    return null;
  } finally {
    if (conn) {
      releaseConnection(conn);
    }
  }
};
