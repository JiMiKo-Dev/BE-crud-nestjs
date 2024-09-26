/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from '../Controllers/user.controller';
import { UserEntity } from '../Entities/UserEntity.entity';
import { UserService } from '../Services/user.service';

@Module({
    imports: [TypeOrmModule.forFeature([UserEntity])],
    controllers: [UserController],
    providers: [UserService],
})
export class UserModule { }
