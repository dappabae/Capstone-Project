import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateDoctorDto {
  @IsNotEmpty({ message: 'Nama dokter harus diisi' })
  @IsString({ message: 'Nama dokter harus berupa teks' })
  readonly name: string;

  @IsNotEmpty({ message: 'Spesialisasi harus diisi' })
  @IsString({ message: 'Spesialisasi harus berupa teks' })
  readonly specialization: string;

  @IsNotEmpty({ message: 'Nomor telepon harus diisi' })
  @IsString({ message: 'Nomor telepon harus berupa teks' })
  readonly phone: string;

  @IsNotEmpty({ message: 'ID Departemen harus diisi' })
  @IsNumber({}, { message: 'ID Departemen harus berupa angka' })
  readonly departmentId: number;
}