import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Producto {
    @Prop({ required: true })
    nombre: string;

    @Prop({ required: true })
    categoria: string;

    
    @Prop({ required: true })
    marca: string;

    @Prop({ required: true })
    modelo: string;

    @Prop({ required: true }) //propiedad obligatoria
    imagenUrl: string;


    @Prop({ required: true })
    precio: number;    

    
    @Prop({ required: true })
    descuento: number;    
    
    @Prop({ required: true })
    stock: number;

    @Prop({ required: true })
    descripcion: string;

     @Prop({ required: true })
    especificaciones: string;

    
    @Prop({ required: true })
    detallesFisicos: string;

    @Prop({ required: true })
    paisOrigen: string;



    @Prop({ required: true })
    valoracion: number;

}

export const ProductoSchema = SchemaFactory.createForClass(Producto);
