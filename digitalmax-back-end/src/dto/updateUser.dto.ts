import {IsString, IsOptional} from 'Class-validator'

export class UpdateUserDTO {
        @IsOptional()
        @IsString()
        nombre?: string;
        @IsOptional()
        @IsString()
        telefono?: string;
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