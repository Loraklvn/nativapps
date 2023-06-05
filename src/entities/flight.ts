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

  @ManyToOne(() => Airport, (airport) => airport.id, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'origin' })
  origin_airport: Airport;

  @Column({ type: 'int' })
  destination: number;

  @ManyToOne(() => Airport, (airport) => airport.id, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'destination' })
  destination_airport: Airport;

  @CreateDateColumn()
  created_at: string;

  @UpdateDateColumn()
  updated_at: string;
}
