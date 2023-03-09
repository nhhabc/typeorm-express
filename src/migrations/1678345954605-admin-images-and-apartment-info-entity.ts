import {MigrationInterface, QueryRunner} from "typeorm";

export class adminImagesAndApartmentInfoEntity1678345954605 implements MigrationInterface {
    name = 'adminImagesAndApartmentInfoEntity1678345954605'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE \`admin\` (
                \`id\` varchar(36) NOT NULL,
                \`username\` varchar(255) NOT NULL,
                \`password\` varchar(255) NOT NULL,
                PRIMARY KEY (\`id\`)
            ) ENGINE = InnoDB
        `);
        await queryRunner.query(`
            CREATE TABLE \`rented_apartment\` (
                \`id\` varchar(36) NOT NULL,
                \`title\` varchar(255) NOT NULL,
                \`description\` varchar(255) NOT NULL,
                \`preview\` varchar(255) NOT NULL,
                \`address\` varchar(255) NOT NULL,
                \`price\` varchar(255) NOT NULL,
                \`area\` varchar(255) NOT NULL,
                \`bedrooms\` int NOT NULL,
                \`bathrooms\` int NOT NULL,
                \`floor\` int NOT NULL,
                \`juridical\` varchar(255) NOT NULL,
                \`requirement\` varchar(255) NOT NULL,
                \`type\` varchar(255) NOT NULL,
                PRIMARY KEY (\`id\`)
            ) ENGINE = InnoDB
        `);
        await queryRunner.query(`
            CREATE TABLE \`image\` (
                \`id\` int NOT NULL AUTO_INCREMENT,
                \`src\` varchar(255) NOT NULL,
                \`appartmentId\` varchar(255) NOT NULL,
                PRIMARY KEY (\`id\`)
            ) ENGINE = InnoDB
        `);
        await queryRunner.query(`
            CREATE TABLE \`selling_apartment\` (
                \`id\` varchar(36) NOT NULL,
                \`title\` varchar(255) NOT NULL,
                \`description\` varchar(255) NOT NULL,
                \`preview\` varchar(255) NOT NULL,
                \`address\` varchar(255) NOT NULL,
                \`price\` varchar(255) NOT NULL,
                \`area\` varchar(255) NOT NULL,
                \`bedrooms\` int NOT NULL,
                \`bathrooms\` int NOT NULL,
                \`floor\` int NOT NULL,
                \`juridical\` varchar(255) NOT NULL,
                \`requirement\` varchar(255) NOT NULL,
                \`type\` varchar(255) NOT NULL,
                PRIMARY KEY (\`id\`)
            ) ENGINE = InnoDB
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE \`selling_apartment\`
        `);
        await queryRunner.query(`
            DROP TABLE \`image\`
        `);
        await queryRunner.query(`
            DROP TABLE \`rented_apartment\`
        `);
        await queryRunner.query(`
            DROP TABLE \`admin\`
        `);
    }

}
