import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { AppointmentEntity } from '../../appointment/entities/appointment.entity.js';

@Entity({ name: 'medical_records' })
export class MedicalRecordEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int', unique: true, name: 'appointment_id' })
  appointmentId: number;

  @Column({ type: 'text' })
  anamnesis: string;

  @Column({ type: 'text' })
  notes: string;

  @OneToOne(
  () => AppointmentEntity,
  (appointment) => appointment.medicalRecord,
  { onDelete: 'CASCADE' },
  )
  @JoinColumn({ name: 'appointment_id' })
  appointment: AppointmentEntity;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}