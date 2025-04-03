import { MigrationInterface, QueryRunner } from "typeorm";

export class Newcolumnsstock1743643644024 implements MigrationInterface {
    name = 'Newcolumnsstock1743643644024'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "stock" ADD "stock_source" character varying(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "stock" ADD "stock_lot" character varying(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "stock" ADD "stock_expiration_date" date NOT NULL`);
        await queryRunner.query(`ALTER TABLE "stock" ADD "stock_manufacture_date" date NOT NULL`);
        await queryRunner.query(`ALTER TABLE "stock" ADD "stock_price" numeric(10,2) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "stock" ADD "stock_supplier" character varying(100) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "stock" DROP COLUMN "stock_supplier"`);
        await queryRunner.query(`ALTER TABLE "stock" DROP COLUMN "stock_price"`);
        await queryRunner.query(`ALTER TABLE "stock" DROP COLUMN "stock_manufacture_date"`);
        await queryRunner.query(`ALTER TABLE "stock" DROP COLUMN "stock_expiration_date"`);
        await queryRunner.query(`ALTER TABLE "stock" DROP COLUMN "stock_lot"`);
        await queryRunner.query(`ALTER TABLE "stock" DROP COLUMN "stock_source"`);
    }

}
