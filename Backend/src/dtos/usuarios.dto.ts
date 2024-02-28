import { IsEmail, IsNotEmpty, IsUrl, IsString, isNotEmpty, isURL} from "class-validator";

export class AgregarUsuarioDto{
    @IsString()
    @IsNotEmpty()
    id: string;

    @IsString()
    @IsNotEmpty()
    nombre: string;

    @IsNotEmpty()
    @IsEmail() 
    email: string;

    @IsNotEmpty()
    @IsUrl()
    avatar: string;
}