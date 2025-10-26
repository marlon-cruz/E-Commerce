import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {User} from '../schemas/user.schema';
import { Model } from 'mongoose';
import { UpdateUserDTO } from 'src/dto/updateUser.dto';
import { CreateUserDTO } from 'src/dto/createUser.dto';
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

    async findOne(id:string){
        return this.userModel.findById(id);
    }
    async eliminarUser(id:string){
        return this.userModel.findByIdAndDelete(id);
    }
    async actualizarUser(id:string,user:UpdateUserDTO){
        return this.userModel.findByIdAndUpdate(id, user);
    }

}

