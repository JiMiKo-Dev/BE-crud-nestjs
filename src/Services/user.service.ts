/*
https://docs.nestjs.com/providers#services
*/

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../Entities/UserEntity.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private readonly UserRepository: Repository<UserEntity>,
    ) { }

    async create(data: Partial<UserEntity>): Promise<UserEntity> {
        const newEntity = this.UserRepository.create(data);
        return await this.UserRepository.save(newEntity)
    }

    async findAll(search: string): Promise<UserEntity[]> {
        const query = this.UserRepository.createQueryBuilder('user')

        if (search) {
            query.where('user.username LIKE :search', { search: `%${search}%` })
                .orWhere('user.first_name LIKE :search', { search: `%${search}%` })
                .orWhere('user.last_name LIKE :search', { search: `%${search}%` })
                .orWhere('user.gender LIKE :search', { search: `%${search}%` })
                .orWhere('user.user_id =:id', { id: Number(search) })
        }

        query.orderBy('user_id', 'ASC')

        return await query.getMany();
    }

    async findOne(user_id: number): Promise<UserEntity> {
        return await this.UserRepository.findOne({ where: { user_id } })
    }

    async update(user_id: number, data: Partial<UserEntity>): Promise<UserEntity> {
        await this.UserRepository.update(user_id, data)
        return this.findOne(user_id)
    }

    async remove(user_id: number): Promise<void> {
        const result = await this.UserRepository.delete(user_id)
        if (result.affected === 0) {
            throw new NotFoundException(`User with ID ${user_id} not found`);
        }
    }
}
