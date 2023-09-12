import { MigrationInterface, QueryRunner } from 'typeorm';

export class Default1694490197964 implements MigrationInterface {
  name = 'Default1694490197964';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`users\` (\`uuid_user\` varchar(36) NOT NULL, \`name\` varchar(255) NOT NULL, \`last_name\` varchar(255) NOT NULL, \`document\` varchar(11) NOT NULL, \`email\` varchar(255) NOT NULL, \`cellphone\` varchar(11) NOT NULL, \`tellphone\` varchar(10) NOT NULL, \`status\` varchar(255) NOT NULL, \`criado_em\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`atualizado_em\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletado_em\` datetime(6) NULL, PRIMARY KEY (\`uuid_user\`)) ENGINE=InnoDB`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE \`Users\``);
  }
}
