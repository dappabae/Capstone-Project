import { IsOptional, IsString } from 'class-validator';

export class UpdateDepartmentDto {
  @IsOptional()
  @IsString({ message: 'Nama departemen harus berupa teks' })
  readonly name?: string;

  @IsOptional()
  @IsString({ message: 'Deskripsi harus berupa teks' })
  readonly description?: string;
}