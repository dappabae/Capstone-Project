import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MedicalRecordController } from './medical-record.controller';
import { MedicalRecordService } from './medical-record.service';
import { MedicalRecordEntity } from './entities/medical-record.entity.js';

@Module({
  imports: [TypeOrmModule.forFeature([MedicalRecordEntity])],
  controllers: [MedicalRecordController],
  providers: [MedicalRecordService]
})
export class MedicalRecordModule {}
