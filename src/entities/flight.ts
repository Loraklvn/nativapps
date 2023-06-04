import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Airport } from './airport';

@Entity()
export class Flight extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  price: number;

  @Column({ type: 'timestamp' })
  departure_time: string;

  @Column({ type: 'timestamp' })
  arrival_time: string;

  @Column({ type: 'int' })
  origin: number;

  @ManyToOne(() => Airport, (airport) => airport.id)
  @JoinColumn({ name: 'desde' })
  origin_airport: Airport;

  @Column({ type: 'int' })
  destination: number;

  @ManyToOne(() => Airport, (airport) => airport.id)
  @JoinColumn({ name: 'hasta' })
  destination_airport: Airport;

  @CreateDateColumn()
  created_at: string;

  @UpdateDateColumn()
  updated_at: string;
}
