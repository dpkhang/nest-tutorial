import { Inject, Injectable } from '@nestjs/common';
import { User } from '../entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: typeof User,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userRepository.findAll<User>();
  }

  async create(user: User): Promise<User> {
    return this.userRepository.create<User>(user as any);
  }

  async update(id: number, user: User): Promise<[affectedCount: number]> {
    return this.userRepository
      .update(user, {
        where: { id: id },
      })
      .then((t) => t);
  }

  async remove(id: number): Promise<number> {
    return this.userRepository
      .destroy({
        where: { id: id },
      })
      .then((t) => t);
  }
}
