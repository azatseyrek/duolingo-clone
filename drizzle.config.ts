import 'dotenv/config';
import type { Config } from 'drizzle-kit';

export default {
  schema: './db/schema.ts',
  out: './drizzle',
  driver: 'pg',
  dbCredentials: {
    connectionString: process.env.DATABASE_URL!,
  },
} satisfies Config;

// satisfies typescriptte 4.9 ile gelen yeni bir ozelliktir. Burada as kullanimi cogu zaman cok guvenilir degildir. Onun yerine satifies daha dogru kullanim olacaktir.
