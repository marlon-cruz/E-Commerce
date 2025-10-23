import {IsString, IsOptional} from 'Class-validator'

export class UpdateUserDTO {
        @IsOptional()
        @IsString()
        nombre?: string;
        @IsOptional()
        @IsString()
        Telefono?: string;
        @IsOptional()
        @IsString()
        correo?: string;
        @IsOptional()
        @IsString()
        contraseña?:string;
        @IsOptional()
        @IsString()
        status?: string;
}