import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateDoctorDto {
  @IsOptional()
  @IsString({ message: 'Nama dokter harus berupa teks' })
  readonly name?: string;

  @IsOptional()
  @IsString({ message: 'Spesialisasi harus berupa teks' })
  readonly specialization?: string;

  @IsOptional()
  @IsString({ message: 'Nomor telepon harus berupa teks' })
  readonly phone?: string;

  @IsOptional()
  @IsNumber({}, { message: 'ID Departemen harus berupa angka' })
  readonly departmentId?: number;
}