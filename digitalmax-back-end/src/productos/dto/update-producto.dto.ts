import { PartialType } from '@nestjs/mapped-types';
import { CreateProductoDto } from './create-producto.dto';
import { IsOptional } from 'class-validator';

export class UpdateProductoDto extends PartialType(CreateProductoDto) {
    @IsOptional()
    imagenUrl?: string;

    @IsOptional()
    nombre?: string;
    
    @IsOptional()
    descripcion?: string;

    @IsOptional()
    valoracion?: number;
    
    @IsOptional()
    precio?: number;

    @IsOptional()
    categoria?: string;
    
    @IsOptional()
    stock?: number;
}
