import { createConnection } from "typeorm";
import { OrmConfig } from "./TypeOrmConfig";

export const connectToDatabase = async () => {
  await createConnection(OrmConfig);
};
