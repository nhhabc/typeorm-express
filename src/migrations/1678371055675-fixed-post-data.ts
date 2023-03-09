import {MigrationInterface, QueryRunner} from "typeorm";

export class fixedPostData1678371055675 implements MigrationInterface {
    name = 'fixedPostData1678371055675'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE \`selling_apartment\` CHANGE \`preview\` \`preview\` varchar(255) NULL
        `);
        await queryRunner.query(`
            ALTER TABLE \`selling_apartment\` CHANGE \`address\` \`address\` varchar(255) NULL
        `);
        await queryRunner.query(`
            ALTER TABLE \`selling_apartment\` CHANGE \`area\` \`area\` varchar(255) NULL
        `);
        await queryRunner.query(`
            ALTER TABLE \`selling_apartment\` CHANGE \`bedrooms\` \`bedrooms\` int NULL
        `);
        await queryRunner.query(`
            ALTER TABLE \`selling_apartment\` CHANGE \`bathrooms\` \`bathrooms\` int NULL
        `);
        await queryRunner.query(`
            ALTER TABLE \`selling_apartment\` CHANGE \`floor\` \`floor\` int NULL
        `);
        await queryRunner.query(`
            ALTER TABLE \`selling_apartment\` CHANGE \`juridical\` \`juridical\` varchar(255) NULL
        `);
        await queryRunner.query(`
            ALTER TABLE \`selling_apartment\` CHANGE \`requirement\` \`requirement\` varchar(255) NULL
        `);
        await queryRunner.query(`
            ALTER TABLE \`selling_apartment\` CHANGE \`type\` \`type\` varchar(255) NULL
        `);
        await queryRunner.query(`
            ALTER TABLE \`rented_apartment\` CHANGE \`preview\` \`preview\` varchar(255) NULL
        `);
        await queryRunner.query(`
            ALTER TABLE \`rented_apartment\` CHANGE \`address\` \`address\` varchar(255) NULL
        `);
        await queryRunner.query(`
            ALTER TABLE \`rented_apartment\` CHANGE \`area\` \`area\` varchar(255) NULL
        `);
        await queryRunner.query(`
            ALTER TABLE \`rented_apartment\` CHANGE \`bedrooms\` \`bedrooms\` int NULL
        `);
        await queryRunner.query(`
            ALTER TABLE \`rented_apartment\` CHANGE \`bathrooms\` \`bathrooms\` int NULL
        `);
        await queryRunner.query(`
            ALTER TABLE \`rented_apartment\` CHANGE \`floor\` \`floor\` int NULL
        `);
        await queryRunner.query(`
            ALTER TABLE \`rented_apartment\` CHANGE \`juridical\` \`juridical\` varchar(255) NULL
        `);
        await queryRunner.query(`
            ALTER TABLE \`rented_apartment\` CHANGE \`requirement\` \`requirement\` varchar(255) NULL
        `);
        await queryRunner.query(`
            ALTER TABLE \`rented_apartment\` CHANGE \`type\` \`type\` varchar(255) NULL
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE \`rented_apartment\` CHANGE \`type\` \`type\` varchar(255) NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE \`rented_apartment\` CHANGE \`requirement\` \`requirement\` varchar(255) NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE \`rented_apartment\` CHANGE \`juridical\` \`juridical\` varchar(255) NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE \`rented_apartment\` CHANGE \`floor\` \`floor\` int NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE \`rented_apartment\` CHANGE \`bathrooms\` \`bathrooms\` int NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE \`rented_apartment\` CHANGE \`bedrooms\` \`bedrooms\` int NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE \`rented_apartment\` CHANGE \`area\` \`area\` varchar(255) NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE \`rented_apartment\` CHANGE \`address\` \`address\` varchar(255) NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE \`rented_apartment\` CHANGE \`preview\` \`preview\` varchar(255) NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE \`selling_apartment\` CHANGE \`type\` \`type\` varchar(255) NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE \`selling_apartment\` CHANGE \`requirement\` \`requirement\` varchar(255) NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE \`selling_apartment\` CHANGE \`juridical\` \`juridical\` varchar(255) NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE \`selling_apartment\` CHANGE \`floor\` \`floor\` int NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE \`selling_apartment\` CHANGE \`bathrooms\` \`bathrooms\` int NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE \`selling_apartment\` CHANGE \`bedrooms\` \`bedrooms\` int NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE \`selling_apartment\` CHANGE \`area\` \`area\` varchar(255) NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE \`selling_apartment\` CHANGE \`address\` \`address\` varchar(255) NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE \`selling_apartment\` CHANGE \`preview\` \`preview\` varchar(255) NOT NULL
        `);
    }

}
