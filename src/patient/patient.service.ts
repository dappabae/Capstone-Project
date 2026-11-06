import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PatientEntity } from './entities/patient.entity.js';
import { CreatePatientDto } from './dto/create-patient.dto.js';
import { UpdatePatientDto } from './dto/update-patient.dto.js';

@Injectable()
export class PatientService {
  constructor(
    @InjectRepository(PatientEntity)
    private readonly patientRepository: Repository<PatientEntity>,
  ) {}

  async create(createPatientDto: CreatePatientDto): Promise<PatientEntity> {
    const patient = this.patientRepository.create(createPatientDto);
    return await this.patientRepository.save(patient);
  }

  async findAll(): Promise<PatientEntity[]> {
    return await this.patientRepository.find();
  }

  async findOne(id: number): Promise<PatientEntity> {
    const patient = await this.patientRepository.findOne({
      where: { id },
      relations: {
        appointments: true,
      },
    });

    if (!patient) {
      throw new NotFoundException(`Pasien dengan ID ${id} tidak ditemukan`);
    }

    return patient;
  }

  async update(id: number, updatePatientDto: UpdatePatientDto): Promise<PatientEntity> {
    const patient = await this.findOne(id);
    
    Object.assign(patient, updatePatientDto);
    return await this.patientRepository.save(patient);
  }

  async remove(id: number): Promise<void> {
    const patient = await this.findOne(id);
    await this.patientRepository.remove(patient);
  }
}