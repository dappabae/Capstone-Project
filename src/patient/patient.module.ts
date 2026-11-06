import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PatientEntity } from './entities/patient.entity.js';
import { PatientController } from './patient.controller.js';
import { PatientService } from './patient.service.js';

@Module({
  imports: [TypeOrmModule.forFeature([PatientEntity])],
  controllers: [PatientController],
  providers: [PatientService],
  exports: [PatientService, TypeOrmModule],
})
export class PatientModule {}