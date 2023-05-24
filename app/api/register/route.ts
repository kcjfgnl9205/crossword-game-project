import { getConnection, releaseConnection } from "@/app/libs/db/mysql";
import { insert_user_mst } from "@/app/libs/db/sql/users/user_mst";

import bcrypt from "bcrypt";
import { NextResponse } from "next/server";


export async function POST(
  request: Request
) {
  const connection = await getConnection();

  const body = await request.json();
  const { email, username, password } = body;
  const hashedPassword = await bcrypt.hash(password, 12);

  try {
    const obj = {
      username: username,
      password: hashedPassword,
      email: email,
      authority: 0
    }

    await connection?.beginTransaction();

    const user = await insert_user_mst(connection, obj);
    
    await connection?.commit();

    return NextResponse.json(user);
  } catch (error: any) {
    await connection?.rollback();
    throw new Error(error);
  } finally {
    releaseConnection(connection);
  }
}
