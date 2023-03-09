import {MigrationInterface, QueryRunner} from "typeorm";

export class changeTypeIdImage1678350759496 implements MigrationInterface {
    name = 'changeTypeIdImage1678350759496'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE \`image\` CHANGE \`id\` \`id\` int NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE \`image\` DROP PRIMARY KEY
        `);
        await queryRunner.query(`
            ALTER TABLE \`image\` DROP COLUMN \`id\`
        `);
        await queryRunner.query(`
            ALTER TABLE \`image\`
            ADD \`id\` varchar(36) NOT NULL PRIMARY KEY
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE \`image\` DROP COLUMN \`id\`
        `);
        await queryRunner.query(`
            ALTER TABLE \`image\`
            ADD \`id\` int NOT NULL AUTO_INCREMENT
        `);
        await queryRunner.query(`
            ALTER TABLE \`image\`
            ADD PRIMARY KEY (\`id\`)
        `);
        await queryRunner.query(`
            ALTER TABLE \`image\` CHANGE \`id\` \`id\` int NOT NULL AUTO_INCREMENT
        `);
    }

}
