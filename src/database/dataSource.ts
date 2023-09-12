import { DataSource } from 'typeorm';

import dotenv from 'dotenv';
dotenv.config({ path: '.env.development' });

const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_SCHEMA } = process.env;
export const AppDataSource = new DataSource({
  type: 'mysql',
  host: DB_HOST,
  port: Number(DB_PORT),
  username: DB_USER,
  password: DB_PASSWORD,
  database: DB_SCHEMA,
  entities: [`${__dirname}/**/entities/*.{ts,js}`],
  migrations: [`${__dirname}/**/migrations/*.{ts,js}`],
});
