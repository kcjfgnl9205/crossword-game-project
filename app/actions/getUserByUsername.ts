import { excuteQuery, getConnection, releaseConnection } from "@/app/libs/db/mysql";
import { SELECT_USER_BY_USERNAME } from "@/app/libs/db/sql/user";


type Props =  {
  username: string;
}

// カテゴリーリスト取得する
export default async function getUserByUsername(params: Props) {
  const connection = await getConnection();
  try {
    const user = await excuteQuery(connection, SELECT_USER_BY_USERNAME, [params.username]);
    if (!user) {
      return null;
    }
    return user[0];
  } catch (error: any) {
    console.log("getUserByUsername" + error);
    return null;
  } finally {
    releaseConnection(connection);
  }
}
