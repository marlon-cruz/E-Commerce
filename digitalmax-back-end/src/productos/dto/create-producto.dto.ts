import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateProductoDto {
    @IsNotEmpty()
    @IsString()
    imagenUrl: string;

    @IsNotEmpty()
    @IsString()
    nombre: string;
    
    @IsNotEmpty()
    @IsString()
    descripcion: string;
    @IsNotEmpty()
    @IsNumber()
    valoracion: number;
    
    @IsNotEmpty()
    @IsNumber()
    precio: number;

    @IsNotEmpty()
    @IsString()
    categoria: string;
    
    @IsNotEmpty()
    @IsNumber()
    stock: number;
}
