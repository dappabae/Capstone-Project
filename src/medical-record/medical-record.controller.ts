import { Body, Controller, Delete, Get, HttpCode, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { MedicalRecordService } from './medical-record.service.js';
import { CreateMedicalRecordDto } from './dto/create-medical-record.dto.js';
import { UpdateMedicalRecordDto } from './dto/update-medical-record.dto.js';

@Controller('medical-record')
export class MedicalRecordController {
  constructor(private readonly medicalRecordService: MedicalRecordService) {}

  @Get()
  findAll() {
    return this.medicalRecordService.findAll();
  }

  @Get(':id')
  findById(@Param('id', ParseIntPipe) id: number) {
    return this.medicalRecordService.findOne(id);
  }

  @Post()
  create(@Body() createMedicalRecordDto: CreateMedicalRecordDto) {
    return this.medicalRecordService.create(createMedicalRecordDto);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateMedicalRecordDto: UpdateMedicalRecordDto) {
    return this.medicalRecordService.update(id, updateMedicalRecordDto);
  }

  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.medicalRecordService.remove(id);
  }
}
