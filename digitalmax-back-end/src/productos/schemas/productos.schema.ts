import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Producto {
    @Prop({ required: true }) //propiedad obligatoria
    imagenUrl: string;

    @Prop({ required: true })
    nombre: string;

    @Prop({ required: true })
    descripcion: string;

    @Prop({ required: true })
    valoracion: number;

    @Prop({ required: true })
    precio: number;

    @Prop({ required: true })
    categoria: string;

    @Prop({ required: true })
    stock: number;
}

export const ProductoSchema = SchemaFactory.createForClass(Producto);
