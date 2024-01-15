import { sql, db } from '@vercel/postgres';
import { userTable } from '@/lib/drizzle';
import { NextResponse } from 'next/server';
 
export async function GET(request: Request) {
//  method 1
//     const users = await sql`SELECT * FROM users;`;

// method 2
// const client = await db.connect();
// const users  = await client.query(`SELECT * FROM users;`);

// method 3 through drizzle
 const users = await db.select().from(userTable);


    return NextResponse.json(users[0].username); 
    
}