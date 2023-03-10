import {MigrationInterface, QueryRunner} from "typeorm";

export class fixedPostEntity1678415183512 implements MigrationInterface {
    name = 'fixedPostEntity1678415183512'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE \`selling_apartment\` DROP COLUMN \`description\`
        `);
        await queryRunner.query(`
            ALTER TABLE \`selling_apartment\`
            ADD \`description\` longtext NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE \`rented_apartment\` DROP COLUMN \`description\`
        `);
        await queryRunner.query(`
            ALTER TABLE \`rented_apartment\`
            ADD \`description\` longtext NOT NULL
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE \`rented_apartment\` DROP COLUMN \`description\`
        `);
        await queryRunner.query(`
            ALTER TABLE \`rented_apartment\`
            ADD \`description\` varchar(255) NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE \`selling_apartment\` DROP COLUMN \`description\`
        `);
        await queryRunner.query(`
            ALTER TABLE \`selling_apartment\`
            ADD \`description\` varchar(255) NOT NULL
        `);
    }

}
