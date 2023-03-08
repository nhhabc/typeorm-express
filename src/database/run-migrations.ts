import { getConnection } from "typeorm";

export async function runMigration() {
    const connection = getConnection();
    return await connection.runMigrations();
}