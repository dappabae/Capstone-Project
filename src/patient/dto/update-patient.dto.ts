import { IsOptional, IsString, IsDateString } from 'class-validator';

export class UpdatePatientDto {
  @IsOptional()
  @IsString({ message: 'Nama pasien harus berupa teks' })
  readonly name?: string;

  @IsOptional()
  @IsDateString({}, { message: 'Format tanggal lahir tidak valid (YYYY-MM-DD)' })
  readonly birthDate?: string;

  @IsOptional()
  @IsString({ message: 'Jenis kelamin harus berupa teks' })
  readonly gender?: string;

  @IsOptional()
  @IsString({ message: 'Alamat harus berupa teks' })
  readonly address?: string;

  @IsOptional()
  @IsString({ message: 'Nomor telepon harus berupa teks' })
  readonly phone?: string;
}