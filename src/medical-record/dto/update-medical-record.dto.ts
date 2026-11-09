import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateMedicalRecordDto {
  @IsOptional()
  @IsNumber({}, { message: 'ID Janji Temu harus berupa angka' })
  readonly appointmentId?: number;

  @IsOptional()
  @IsString({ message: 'Anamnesis harus berupa teks' })
  readonly anamnesis?: string;

  @IsOptional()
  @IsString({ message: 'Catatan harus berupa teks' })
  readonly notes?: string;
}
