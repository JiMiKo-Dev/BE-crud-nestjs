import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './Modules/user.module';
import { UserEntity } from './Entities/UserEntity.entity';

@Module({
  imports: [
    UserModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'postgres',
      entities: [UserEntity],
      synchronize: false,
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
