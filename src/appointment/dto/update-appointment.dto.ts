import { IsNumber, IsOptional, IsString, IsDateString } from 'class-validator';

export class UpdateAppointmentDto {
  @IsOptional()
  @IsNumber({}, { message: 'ID Pasien harus berupa angka' })
  readonly patientId?: number;

  @IsOptional()
  @IsNumber({}, { message: 'ID Dokter harus berupa angka' })
  readonly doctorId?: number;

  @IsOptional()
  @IsDateString({}, { message: 'Format tanggal dan waktu janji temu tidak valid' })
  readonly appointmentDate?: string;

  @IsOptional()
  @IsString({ message: 'Status harus berupa teks' })
  readonly status?: string;
}