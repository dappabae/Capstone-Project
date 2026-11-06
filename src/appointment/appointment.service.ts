import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AppointmentEntity } from './entities/appointment.entity.js';
import { CreateAppointmentDto } from './dto/create-appointment.dto.js';
import { UpdateAppointmentDto } from './dto/update-appointment.dto.js';

@Injectable()
export class AppointmentService {
  constructor(
    @InjectRepository(AppointmentEntity)
    private readonly appointmentRepository: Repository<AppointmentEntity>,
  ) {}

  async create(createAppointmentDto: CreateAppointmentDto): Promise<AppointmentEntity> {
    const appointment = this.appointmentRepository.create(createAppointmentDto);
    return await this.appointmentRepository.save(appointment);
  }

  async findAll(): Promise<AppointmentEntity[]> {
    return await this.appointmentRepository.find({
      relations: {
        patient: true,
        doctor: true,
      },
    });
  }

  async findOne(id: number): Promise<AppointmentEntity> {
    const appointment = await this.appointmentRepository.findOne({
      where: { id },
      relations: {
        patient: true,
        doctor: true,
      },
    });

    if (!appointment) {
      throw new NotFoundException(`Janji temu dengan ID ${id} tidak ditemukan`);
    }

    return appointment;
  }

  async update(id: number, updateAppointmentDto: UpdateAppointmentDto): Promise<AppointmentEntity> {
    const appointment = await this.findOne(id);
    
    Object.assign(appointment, updateAppointmentDto);
    return await this.appointmentRepository.save(appointment);
  }

  async remove(id: number): Promise<void> {
    const appointment = await this.findOne(id);
    await this.appointmentRepository.remove(appointment);
  }
}