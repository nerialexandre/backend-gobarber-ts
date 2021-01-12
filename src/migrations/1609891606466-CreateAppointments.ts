import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateAppointments1609891606466
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'appointments',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()'
          },
          {
            name: 'providerId',
            type: 'uuid',
            isNullable: true
          },
          {
            name: 'userId',
            type: 'uuid',
            isNullable: true
          },
          {
            name: 'date',
            type: 'timestamp with time zone'
          },
          {
            name: 'createdAt',
            type: 'timestamp',
            default: 'now()'
          },
          {
            name: 'updatedAt',
            type: 'timestamp',
            default: 'now()'
          },
          {
            name: 'appointmentActive',
            type: 'boolean',
            default: true
          }
        ]
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('appointments');
  }
}
