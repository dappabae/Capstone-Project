import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateMedicalRecordDto {
  @IsNotEmpty({ message: 'ID Janji Temu harus diisi' })
  @IsNumber({}, { message: 'ID Janji Temu harus berupa angka' })
  readonly appointmentId: number;

  @IsNotEmpty({ message: 'Anamnesis harus diisi' })
  @IsString({ message: 'Anamnesis harus berupa teks' })
  readonly anamnesis: string;

  @IsNotEmpty({ message: 'Catatan harus diisi' })
  @IsString({ message: 'Catatan harus berupa teks' })
  readonly notes: string;
}
