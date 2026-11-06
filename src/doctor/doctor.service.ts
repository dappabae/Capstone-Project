import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DoctorEntity } from './entities/doctor.entity.js';
import { CreateDoctorDto } from './dto/create-doctor.dto.js';
import { UpdateDoctorDto } from './dto/update-doctor.dto.js';

@Injectable()
export class DoctorService {
  constructor(
    @InjectRepository(DoctorEntity)
    private readonly doctorRepository: Repository<DoctorEntity>,
  ) {}

  async create(createDoctorDto: CreateDoctorDto): Promise<DoctorEntity> {
    const doctor = this.doctorRepository.create(createDoctorDto);
    return await this.doctorRepository.save(doctor);
  }

  async findAll(): Promise<DoctorEntity[]> {
    return await this.doctorRepository.find({
      relations: {
        department: true,
      },
    });
  }

  async findOne(id: number): Promise<DoctorEntity> {
    const doctor = await this.doctorRepository.findOne({
      where: { id },
      relations: {
        department: true,
        appointments: true,
      },
    });

    if (!doctor) {
      throw new NotFoundException(`Dokter dengan ID ${id} tidak ditemukan`);
    }

    return doctor;
  }

  async update(id: number, updateDoctorDto: UpdateDoctorDto): Promise<DoctorEntity> {
    const doctor = await this.findOne(id);
    
    Object.assign(doctor, updateDoctorDto);
    return await this.doctorRepository.save(doctor);
  }

  async remove(id: number): Promise<void> {
    const doctor = await this.findOne(id);
    await this.doctorRepository.remove(doctor);
  }
}