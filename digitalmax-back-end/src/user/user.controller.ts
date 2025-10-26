import { Controller, Get, Post, Delete,Put, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDTO } from 'src/dto/createUser.dto';

@Controller('user')
export class UserController {
    constructor(private userService: UserService){}

    @Get()
    finsALL(){
        return 'Get ALL USERS'
    }
    @Get(':id')
    findOne(){
        return 'Get one user'
    }
    @Post()
    create(@Body()CreateUser: CreateUserDTO){
        return 'Creation user'
    }
    @Delete(':id')
    delete(){
        return 'Delete user'
    }
    @Put(':id')
        update(){
        return 'Update user'
        }
}   

