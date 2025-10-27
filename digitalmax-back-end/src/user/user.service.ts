import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UpdateUserDTO } from 'src/dto/updateUser.dto';
import { CreateUserDTO } from 'src/dto/createUser.dto';

import { User } from 'src/schemas/user.schema';

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<User>){}

    finALL(){
       return this.userModel.find();
    }

    async create(createUser: CreateUserDTO){
        this.userModel.create();
        const newUser = new this.userModel(createUser)
    return newUser.save();
        
    }

    async findOne(correouser:string){
        return await this.userModel.findOne({ correo: correouser});
    }


    async eliminarUser(id:string){
        return this.userModel.findByIdAndDelete(id);
    }
    async actualizarUser(id:string,user:UpdateUserDTO){
        return this.userModel.findByIdAndUpdate(id, user);
    }

}

