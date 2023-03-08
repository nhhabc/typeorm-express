import { ConnectionOptions } from "typeorm";

require("dotenv").config();

export const OrmConfig = {
  name: "default",
  type: "mysql",
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database:  process.env.DB_DATABASE,
  migrationsRun: false,
  migrations: ['src/migrations/**/**'],
  entities: ['src/entity/**/**'],
  synchronize: false,
  cli: {
      entitiesDir: 'src/entity',
      migrationsDir: 'src/migrations',  
  },
} as ConnectionOptions;