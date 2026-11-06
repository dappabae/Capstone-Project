import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DepartmentEntity } from './entities/department.entity.js';
import { DepartmentController } from './department.controller.js';
import { DepartmentService } from './department.service.js';

@Module({
  imports: [TypeOrmModule.forFeature([DepartmentEntity])],
  controllers: [DepartmentController],
  providers: [DepartmentService],
  exports: [DepartmentService, TypeOrmModule],
})
export class DepartmentModule {}