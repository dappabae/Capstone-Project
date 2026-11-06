import { IsNotEmpty, IsNumber, IsString, IsDateString, IsOptional } from 'class-validator';

export class CreateAppointmentDto {
  @IsNotEmpty({ message: 'ID Pasien harus diisi' })
  @IsNumber({}, { message: 'ID Pasien harus berupa angka' })
  readonly patientId: number;

  @IsNotEmpty({ message: 'ID Dokter harus diisi' })
  @IsNumber({}, { message: 'ID Dokter harus berupa angka' })
  readonly doctorId: number;

  @IsNotEmpty({ message: 'Tanggal janji temu harus diisi' })
  @IsDateString({}, { message: 'Format tanggal dan waktu janji temu tidak valid' })
  readonly appointmentDate: string;

  @IsOptional()
  @IsString({ message: 'Status harus berupa teks' })
  readonly status?: string;
}