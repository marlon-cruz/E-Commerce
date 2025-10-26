import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";


@Schema({
    timestamps:true
})
export class User {
    
    @Prop({
        required:true, trim:true
    })
    nombre: string;
    
    @Prop({
        required:true, trim:true
    })
    
    Telefono: string;
    
    @Prop({
        required:true, trim:true, unique:true
    })
    
    correo: string;
    
    @Prop({
        required:true
    })
    
    contraseña:string;
    
    @Prop({
        required:true, unique:true, default:'inactive'
    })
    status: string;
}

export const userShecma = SchemaFactory.createForClass(User)
