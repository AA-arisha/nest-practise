import { Body, Controller, Post, Get } from "@nestjs/common";
import { CreateUserDto } from "src/dto/create-user.dto";
import { UsersService } from "src/services/users.service";
import { User } from "src/Schemas/users.schema";


@Controller('users')
export class UsersController{
    constructor ( private readonly usersService :UsersService){};

    @Post()
    async create(@Body() createUserDto : CreateUserDto ){
        return this.usersService.create(createUserDto);
    }
    @Get()
    async findAll(): Promise<User[]> {
        return this.usersService.findAll();
    }
}
