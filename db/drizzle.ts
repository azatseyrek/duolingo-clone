import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

import * as schema from './schema';

let dbUrl: string;

switch (process.env.NODE_ENV) {
  case 'development':
    dbUrl = process.env.DATABASE_URL_DEV!;
    break;
  case 'production':
    dbUrl = process.env.DATABASE_URL!;
    break;
  default:
    dbUrl = process.env.DATABASE_URL_DEV!;
}

const sql = neon(dbUrl);
const db = drizzle(sql, { schema });

export default db;
