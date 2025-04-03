import { MigrationInterface, QueryRunner } from "typeorm";

export class IndexStock1743716766010 implements MigrationInterface {
    name = 'IndexStock1743716766010'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE INDEX "IDX_923dc660ffdd5cf20e6c26c3c2" ON "stock" ("stockCreatedAt") `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "public"."IDX_923dc660ffdd5cf20e6c26c3c2"`);
    }

}
