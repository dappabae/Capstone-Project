import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { PatientModule } from './patient/patient.module.js';
import { DoctorModule } from './doctor/doctor.module.js';
import { DepartmentModule } from './department/department.module.js';
import { AppointmentModule } from './appointment/appointment.module.js';
import { MedicalRecordModule } from './medical-record/medical-record.module.js';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '127.0.0.1',
      port: 5432,
      username: 'clinic',              // Disesuaikan dengan POSTGRES_USER
      password: 'clinic123',     // Disesuaikan dengan POSTGRES_PASSWORD
      database: 'clinic_db',      // Disesuaikan dengan POSTGRES_DB
      autoLoadEntities: true,
      synchronize: true,
    }),
    PatientModule,
    DoctorModule,
    DepartmentModule,
    AppointmentModule,
    MedicalRecordModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}