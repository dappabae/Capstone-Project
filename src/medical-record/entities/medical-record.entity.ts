import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

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

  @OneToOne('AppointmentEntity', 'medicalRecord', { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'appointment_id' })
  appointment: any;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}