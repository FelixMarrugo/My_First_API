import {IsNumber, IsString, IsNotEmpty} from 'class-validator';

export class CrearMinisterioDto{

    @IsNotEmpty()
    @IsNumber()
    id: number;

    @IsNotEmpty()
    @IsString()
    nombre: String;

    @IsNotEmpty()
    @IsString()
    lider: String;

    @IsNotEmpty()
    @IsNumber()
    n_mienbros: number;
}