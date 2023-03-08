import {MigrationInterface, QueryRunner} from "typeorm";

export class user1678247109139 implements MigrationInterface {
    name = 'user1678247109139'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE \`user\`
            ADD \`address\` varchar(255) NOT NULL
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE \`user\` DROP COLUMN \`address\`
        `);
    }

}
