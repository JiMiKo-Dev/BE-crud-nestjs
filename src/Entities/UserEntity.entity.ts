import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity('user_details')

export class UserEntity {
    @PrimaryGeneratedColumn()
    user_id: number;

    @Column({ nullable: false })
    username: string

    @Column({ nullable: false })
    first_name: string

    @Column({ nullable: false })
    last_name: string

    @Column({ nullable: false })
    gender: string

    @Column({ nullable: false })
    password: string

    @Column({ type: 'smallint' })
    status: number

}