import { IsEmpty, IsNotEmpty, IsNumber, IsString } from 'Class-validator';

export class CreateProductoDto {
  @IsNotEmpty()
  @IsString()
  nombre: string;
  @IsNotEmpty()
  @IsString()
  categoria: string;

  @IsNotEmpty()
  @IsString()
  marca: string;
  @IsNotEmpty()
  @IsString()
  modelo: string;
  @IsNotEmpty()
  @IsString()
  imagenUrl: string;
  @IsNotEmpty()
  @IsString()
  imagenUrl1: string;


  @IsNotEmpty()
  @IsNumber()
  precio: number;

  @IsNotEmpty()
  @IsNumber()
  descuento: number;
  @IsNotEmpty()
  @IsNumber()
  stock: number;
  @IsNotEmpty()
  @IsString()
  descripcion: string;
  @IsNotEmpty()
  @IsString()
  especificaciones: string;

  @IsNotEmpty()
  @IsString()
  detallesFisicos: string;
  @IsNotEmpty()
  @IsString()
  paisOrigen: string;
  @IsNotEmpty()
  @IsNumber()
  valoracion: number;
}
