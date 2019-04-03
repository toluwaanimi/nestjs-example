import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { LoggerService } from '../common/logger/logger.service';

import { User } from './user.entity';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [
    UserService,
    UserResolver,
    {
      provide: LoggerService,
      useValue: new LoggerService('UserController'),
    },
  ],
  exports: [UserService],
})
export class UserModule {}