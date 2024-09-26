/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { UserEntity } from '../Entities/UserEntity.entity';
import { UserService } from '../Services/user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userSv: UserService) { }

    @Post('/create')
    create(@Body() data: Partial<UserEntity>) {
        return this.userSv.create(data)
    }

    @Get()
    findAll(@Query('search') search?: string) {
        return this.userSv.findAll(search)
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.userSv.findOne(id);
    }

    @Put('/update/:id')
    update(@Param('id') id: number, @Body() data: Partial<UserEntity>) {
        return this.userSv.update(id, data)
    }

    @Delete('/delete/:id')
    remove(@Param('id') id: number) {
        return this.userSv.remove(id)
    }



}
