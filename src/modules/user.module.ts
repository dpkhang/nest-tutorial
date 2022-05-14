import { Module } from '@nestjs/common';
import { userProvider } from '../providers/user.provider';
import { UserService } from '../services/user.service';
import { UserController } from '../controllers/user.controller';

@Module({
  controllers: [UserController],
  providers: [...userProvider, UserService],
})
export class UserModule {}
