import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'patients' })
export class PatientEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100 })
  name: string;

  @Column({ type: 'date', name: 'birth_date' })
  birthDate: Date;

  @Column({ type: 'varchar', length: 10 })
  gender: string; // Contoh: 'L' atau 'P'

  @Column({ type: 'text' })
  address: string;

  @Column({ type: 'varchar', length: 20 })
  phone: string;

  @OneToMany('AppointmentEntity', 'patient')
  appointments: any[];

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}