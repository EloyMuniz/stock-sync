import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1743640628499 implements MigrationInterface {
    name = 'InitialMigration1743640628499'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "stock" ("stock_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "stock_product_name" character varying(50) NOT NULL, "stock_quantity" integer NOT NULL, "stockCreatedAt" TIMESTAMP(6) NOT NULL DEFAULT now(), "stockUpdatedAt" TIMESTAMP(6) NOT NULL DEFAULT now(), "userUserId" uuid, CONSTRAINT "PK_535f28fb720127de0997a5a866e" PRIMARY KEY ("stock_id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("user_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "user_name" character varying(30) NOT NULL, "user_email" character varying(30) NOT NULL, "user_password" character varying(30) NOT NULL, "userCreatedAt" TIMESTAMP(6) NOT NULL DEFAULT now(), "userUpdatedAt" TIMESTAMP(6) NOT NULL DEFAULT now(), CONSTRAINT "UQ_65d72a4b8a5fcdad6edee8563b0" UNIQUE ("user_email"), CONSTRAINT "PK_758b8ce7c18b9d347461b30228d" PRIMARY KEY ("user_id"))`);
        await queryRunner.query(`ALTER TABLE "stock" ADD CONSTRAINT "FK_6afb3466f586ab66b99340f49fc" FOREIGN KEY ("userUserId") REFERENCES "user"("user_id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "stock" DROP CONSTRAINT "FK_6afb3466f586ab66b99340f49fc"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "stock"`);
    }

}
