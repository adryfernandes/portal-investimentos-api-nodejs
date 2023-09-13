import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { UserStatus } from '../../utils/enums';
import { Timestamp } from './extendings/timestamp';

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'uuid_user' })
  uuid: string;

  @Column()
  name: string;

  @Column({ name: 'last_name' })
  lastName: string;

  @Column({ length: 11 })
  document: string;

  @Column()
  email: string;

  @Column({ length: 11 })
  cellphone: string;

  @Column({ length: 10 })
  tellphone: string;

  @Column({ type: 'enum', enum: UserStatus, default: UserStatus.ACTIVE })
  status: UserStatus;

  @Column(() => Timestamp, { prefix: false })
  timestamp: Timestamp;
}
