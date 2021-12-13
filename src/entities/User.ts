import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  user_name: string;
  @Column()
  create_time: number;
  @Column()
  update_time: number;
}
