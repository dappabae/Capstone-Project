import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateDepartmentDto {
  @IsNotEmpty({ message: 'Nama departemen harus diisi' })
  @IsString({ message: 'Nama departemen harus berupa teks' })
  readonly name: string;

  @IsOptional()
  @IsString({ message: 'Deskripsi harus berupa teks' })
  readonly description?: string;
}