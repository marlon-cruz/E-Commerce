import {IsString, IsOptional,IsNotEmpty } from 'Class-validator'

export class CreateUserDTO {
        @IsNotEmpty()
        @IsString() 
        nombre: string;
        @IsString()
        @IsNotEmpty()
        Telefono: string;
        @IsString()
        @IsNotEmpty()
        correo: string;
        @IsString()
        @IsNotEmpty()
        contraseña:string;
        @IsString()
        @IsNotEmpty()
        status: string;
}