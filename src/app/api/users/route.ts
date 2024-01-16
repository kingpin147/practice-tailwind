import { sql } from "@vercel/postgres";
import { userTable, db } from "@/lib/drizzle";
import { NextResponse } from "next/server";
import { drizzle } from "drizzle-orm/vercel-postgres";

export async function GET(request: Request) {
  //  method 1
  //     const users = await sql`SELECT * FROM users;`;

  // method 2
  // const client = await db.connect();
  // const users  = await client.query(`SELECT * FROM users;`);

  // Method 3 through drizzle
  const selectResult = await db.select().from(userTable);

  return NextResponse.json(selectResult);
}
