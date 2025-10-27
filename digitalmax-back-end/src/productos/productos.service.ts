import { Injectable } from '@nestjs/common';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Producto } from './schemas/productos.schema';
import { Model } from 'mongoose';

@Injectable()
export class ProductosService {
  constructor(@InjectModel(Producto.name) private ProductoModel: Model <Producto>) {}
  
  create(createProductoDto: CreateProductoDto) {
    // const createdProducto = new this.ProductoModel(createProductoDto);
    // return createdProducto.save();
    return this.ProductoModel.create(createProductoDto);
  }
    //return 'This action adds a new producto';

  findAll() {
    return this.ProductoModel.find().exec();
    //return `This action returns all productos QUE YO AGREGUE`;
  }

  findOne(id: string) {
    return this.ProductoModel.findById(id).exec();
    //return `This action returns a #${id} producto`;
  }

  update(id: string, updateProductoDto: UpdateProductoDto) {
    // const updatedProducto = this.ProductoModel.findByIdAndUpdate(id, updateProductoDto);
    // return updatedProducto;
    //return `This action updates a #${id} producto`;
    return this.ProductoModel.findByIdAndUpdate(id, updateProductoDto, { new: true, }).exec();
  }

  remove(id: string) {
    return this.ProductoModel.findByIdAndDelete(id).exec();
    //return `This action removes a #${id} producto`;
  }
}
