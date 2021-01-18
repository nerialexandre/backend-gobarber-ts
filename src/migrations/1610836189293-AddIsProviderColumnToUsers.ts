import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export default class AddIsProviderColumnToUsers1610836189293
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'users',
      new TableColumn({
        name: 'isProvider',
        type: 'boolean',
        default: false
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('users', 'isProvider');
  }
}
