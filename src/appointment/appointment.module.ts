import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppointmentEntity } from './entities/appointment.entity.js';
import { AppointmentController } from './appointment.controller.js';
import { AppointmentService } from './appointment.service.js';

@Module({
  imports: [TypeOrmModule.forFeature([AppointmentEntity])],
  controllers: [AppointmentController],
  providers: [AppointmentService],
  exports: [AppointmentService, TypeOrmModule],
})
export class AppointmentModule {}