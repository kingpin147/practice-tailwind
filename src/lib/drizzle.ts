import { drizzle } from 'drizzle-orm/vercel-postgres';
import { sql } from '@vercel/postgres';
import {
  pgTable,
  serial,
  text,
  timestamp,
  uniqueIndex,
} from 'drizzle-orm/pg-core';
 
// Use this object to send drizzle queries to your DB
export const db = drizzle(sql);
// Create a pgTable that maps to a table in your DB
export const userTable = pgTable(
  'users',
  {
    id: serial('_id').primaryKey(),
    name: text('username').notNull(),
    email: text('email').notNull(),
    
  });
 
// export const getExampleTable = async () => {
//   const selectResult = await db.select().from(userTable);
//   console.log('Results', selectResult);
// };