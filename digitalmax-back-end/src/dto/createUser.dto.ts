import {IsString, IsOptional,IsNotEmpty } from 'Class-validator'

export class CreateUserDTO {
        @IsNotEmpty()
        @IsString() 
        nombre: string;
        @IsString()
        @IsNotEmpty()
        telefono: string;
        @IsString()
        @IsNotEmpty()
        correo: string;
        @IsString()
        @IsNotEmpty()
        contraseña:string;
        @IsOptional()
        @IsString()
        status: string;
}