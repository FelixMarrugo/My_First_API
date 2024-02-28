import { IsEmail, IsNotEmpty, IsPositive, IsString, IsUrl } from 'class-validator';

export class CrearProductoDto {
  @IsPositive()
  @IsNotEmpty()
  precio: number;

  @IsNotEmpty()
  @IsString()
  nombre: string;

  @IsUrl()
  @IsNotEmpty()
  imagen: string;
}