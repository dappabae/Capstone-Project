import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MedicalRecordEntity } from './entities/medical-record.entity.js';
import { CreateMedicalRecordDto } from './dto/create-medical-record.dto.js';
import { UpdateMedicalRecordDto } from './dto/update-medical-record.dto.js';

@Injectable()
export class MedicalRecordService {
  constructor(
    @InjectRepository(MedicalRecordEntity)
    private readonly medicalRecordRepository: Repository<MedicalRecordEntity>,
  ) {}

  async create(createMedicalRecordDto: CreateMedicalRecordDto): Promise<MedicalRecordEntity> {
    const medicalRecord = this.medicalRecordRepository.create(createMedicalRecordDto);
    return await this.medicalRecordRepository.save(medicalRecord);
  }

  async findAll(): Promise<MedicalRecordEntity[]> {
    return await this.medicalRecordRepository.find({
      relations: {
        appointment: true,
      },
    });
  }

  async findOne(id: number): Promise<MedicalRecordEntity> {
    const medicalRecord = await this.medicalRecordRepository.findOne({
      where: { id },
      relations: {
        appointment: true,
      },
    });

    if (!medicalRecord) {
      throw new NotFoundException(`Rekam medis dengan ID ${id} tidak ditemukan`);
    }

    return medicalRecord;
  }

  async update(id: number, updateMedicalRecordDto: UpdateMedicalRecordDto): Promise<MedicalRecordEntity> {
    const medicalRecord = await this.findOne(id);

    Object.assign(medicalRecord, updateMedicalRecordDto);
    return await this.medicalRecordRepository.save(medicalRecord);
  }

  async remove(id: number): Promise<void> {
    const medicalRecord = await this.findOne(id);
    await this.medicalRecordRepository.remove(medicalRecord);
  }
}
