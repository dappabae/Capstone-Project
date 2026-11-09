import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { PatientEntity } from '../../patient/entities/patient.entity.js';
import { DoctorEntity } from '../../doctor/entities/doctor.entity.js';
import { MedicalRecordEntity } from '../../medical-record/entities/medical-record.entity.js';

@Entity({ name: 'appointments' })
export class AppointmentEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int', name: 'patient_id' })
  patientId: number;

  @ManyToOne(() => PatientEntity, (patient) => patient.appointments, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'patient_id' })
  patient: PatientEntity;

  @Column({ type: 'int', name: 'doctor_id' })
  doctorId: number;

  @ManyToOne(() => DoctorEntity, (doctor) => doctor.appointments, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'doctor_id' })
  doctor: DoctorEntity;

  @Column({ type: 'timestamp', name: 'appointment_date' })
  appointmentDate: Date;

  @Column({ type: 'varchar', length: 50, default: 'Scheduled' })
  status: string; // Contoh: Scheduled, Completed, Cancelled

  @OneToOne(
  () => MedicalRecordEntity,
  (medicalRecord) => medicalRecord.appointment,
  )
  medicalRecord: MedicalRecordEntity;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}