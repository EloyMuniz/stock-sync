import { MigrationInterface, QueryRunner } from "typeorm";

export class Changingforeignkeyname1743640903675 implements MigrationInterface {
    name = 'Changingforeignkeyname1743640903675'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "stock" DROP CONSTRAINT "FK_6afb3466f586ab66b99340f49fc"`);
        await queryRunner.query(`ALTER TABLE "stock" RENAME COLUMN "userUserId" TO "user_id"`);
        await queryRunner.query(`ALTER TABLE "stock" ADD CONSTRAINT "FK_55437be5c4e111de5c6c4ec6254" FOREIGN KEY ("user_id") REFERENCES "user"("user_id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "stock" DROP CONSTRAINT "FK_55437be5c4e111de5c6c4ec6254"`);
        await queryRunner.query(`ALTER TABLE "stock" RENAME COLUMN "user_id" TO "userUserId"`);
        await queryRunner.query(`ALTER TABLE "stock" ADD CONSTRAINT "FK_6afb3466f586ab66b99340f49fc" FOREIGN KEY ("userUserId") REFERENCES "user"("user_id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

}
