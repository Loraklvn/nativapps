import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Flight } from './flight';
import { User } from './user';

@Entity()
export class Reservation extends BaseEntity {
  @PrimaryColumn()
  user_id: number;

  @PrimaryColumn()
  flight_id: number;

  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => Flight, (flight) => flight.id)
  @JoinColumn({ name: 'flight_id' })
  flight: Flight;

  @Column({ type: 'enum', enum: ['P', 'C'], default: 'P' })
  status: 'P';

  @CreateDateColumn()
  created_at: string;

  @UpdateDateColumn()
  updated_at: string;
}
