import { IsNotEmpty, IsString, IsDateString } from 'class-validator';

export class CreatePatientDto {
  @IsNotEmpty({ message: 'Nama pasien harus diisi' })
  @IsString({ message: 'Nama pasien harus berupa teks' })
  readonly name: string;

  @IsNotEmpty({ message: 'Tanggal lahir harus diisi' })
  @IsDateString({}, { message: 'Format tanggal lahir tidak valid (YYYY-MM-DD)' })
  readonly birthDate: string;

  @IsNotEmpty({ message: 'Jenis kelamin harus diisi' })
  @IsString({ message: 'Jenis kelamin harus berupa teks' })
  readonly gender: string;

  @IsNotEmpty({ message: 'Alamat harus diisi' })
  @IsString({ message: 'Alamat harus berupa teks' })
  readonly address: string;

  @IsNotEmpty({ message: 'Nomor telepon harus diisi' })
  @IsString({ message: 'Nomor telepon harus berupa teks' })
  readonly phone: string;
}