import { Controller, Get, Post, Delete,Put, Body,Param, ConflictException,HttpCode } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDTO } from 'src/dto/createUser.dto'
import { UpdateUserDTO } from 'src/dto/updateUser.dto';

@Controller('user')
export class UserController {
    constructor(private userService: UserService){}

    @Get()
    async finsALL(){

        const consulta = await this.userService.finALL();
        if(!consulta){
            throw new ConflictException("NO se encuentrar usuarios registrados")
        }
        return consulta;
        
    }
    @Get(':id')
    async findOne(@Param('id') id:string){
       
        const consulta = await this.userService.findOne(id);
        if(!consulta){
            throw new ConflictException("Usuario no existente")
        }else{
            return consulta;
        }
        
    }
    @Post()
    
    create(@Body()CreateUser: CreateUserDTO){
         try {
            return  this.userService.create(CreateUser);
        } catch (error) {
          if(error.code = "11000"){
            throw new ConflictException("El usuario ya existe")
          }
          throw error;
        }
    }
  
    @Delete(':id')
    @HttpCode(204)
    async delete(@Param('id') id:string){
        const consult = await this.userService.eliminarUser(id);            
        if(!consult){
            throw new ConflictException("El usuario que intenta eliminar no existe")
        }
        return consult;
        
    }
    @Put(':id')
    @HttpCode(200)
    async update(@Param('id') id:string,@Body() user:UpdateUserDTO){
    const consulta = await this.userService.actualizarUser(id,user)
       if(!consulta){
        throw new ConflictException("El usuario que intenta editar no existe");
       }
        return consulta;
       
    }
}   

