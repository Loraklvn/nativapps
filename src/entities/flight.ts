import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

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

  @Column()
  origin: string;

  @Column()
  destination: string;

  @CreateDateColumn()
  created_at: string;

  @UpdateDateColumn()
  updated_at: string;
}
