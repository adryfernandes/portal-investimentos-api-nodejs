import { MigrationInterface, QueryRunner } from 'typeorm';

export class Default1694559327800 implements MigrationInterface {
  name = 'Default1694559327800';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`status\``);
    await queryRunner.query(
      `ALTER TABLE \`users\` ADD \`status\` enum ('active', 'inactive', 'blocked') NOT NULL DEFAULT 'active'`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`status\``);
    await queryRunner.query(`ALTER TABLE \`users\` ADD \`status\` varchar(255) NOT NULL`);
  }
}
