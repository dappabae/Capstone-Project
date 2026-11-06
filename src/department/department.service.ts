import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DepartmentEntity } from './entities/department.entity.js';
import { CreateDepartmentDto } from './dto/create-department.dto.js';
import { UpdateDepartmentDto } from './dto/update-department.dto.js';

@Injectable()
export class DepartmentService {
  constructor(
    @InjectRepository(DepartmentEntity)
    private readonly departmentRepository: Repository<DepartmentEntity>,
  ) {}

  async create(createDepartmentDto: CreateDepartmentDto): Promise<DepartmentEntity> {
    const department = this.departmentRepository.create(createDepartmentDto);
    return await this.departmentRepository.save(department);
  }

  async findAll(): Promise<DepartmentEntity[]> {
    return await this.departmentRepository.find({
      relations: {
        doctors: true,
      },
    });
  }

  async findOne(id: number): Promise<DepartmentEntity> {
    const department = await this.departmentRepository.findOne({
      where: { id },
      relations: {
        doctors: true,
      },
    });

    if (!department) {
      throw new NotFoundException(`Departemen dengan ID ${id} tidak ditemukan`);
    }

    return department;
  }

  async update(id: number, updateDepartmentDto: UpdateDepartmentDto): Promise<DepartmentEntity> {
    const department = await this.findOne(id);
    
    Object.assign(department, updateDepartmentDto);
    return await this.departmentRepository.save(department);
  }

  async remove(id: number): Promise<void> {
    const department = await this.findOne(id);
    await this.departmentRepository.remove(department);
  }
}