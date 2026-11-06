import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'; // <-- Pastikan ini diimpor
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { PatientModule } from './patient/patient.module.js';
import { DoctorModule } from './doctor/doctor.module.js';
import { DepartmentModule } from './department/department.module.js';
import { AppointmentModule } from './appointment/appointment.module.js';
import { MedicalRecordModule } from './medical-record/medical-record.module.js';

@Module({
  imports: [
    // Tambahkan konfigurasi root database di sini:
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres', // Sesuaikan dengan username DB Anda
      password: 'password', // Sesuaikan dengan password DB Anda
      database: 'clinic_db', // Sesuaikan dengan nama database Anda
      autoLoadEntities: true,
      synchronize: true, // Set false jika di production
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