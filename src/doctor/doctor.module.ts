import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DoctorEntity } from './entities/doctor.entity.js';
import { DoctorController } from './doctor.controller.js';
import { DoctorService } from './doctor.service.js';

@Module({
  imports: [TypeOrmModule.forFeature([DoctorEntity])],
  controllers: [DoctorController],
  providers: [DoctorService],
  exports: [DoctorService, TypeOrmModule],
})
export class DoctorModule {}