import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { DepartmentEntity } from '../../department/entities/department.entity.js';

@Entity({ name: 'doctors' })
export class DoctorEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100 })
  name: string;

  @Column({ type: 'varchar', length: 100 })
  specialization: string;

  @Column({ type: 'varchar', length: 20 })
  phone: string;

  @Column({ type: 'int', name: 'department_id' })
  departmentId: number;

  @ManyToOne(() => DepartmentEntity, (department) => department.doctors, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'department_id' })
  department: DepartmentEntity;

  @OneToMany('AppointmentEntity', 'doctor')
  appointments: any[];

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}