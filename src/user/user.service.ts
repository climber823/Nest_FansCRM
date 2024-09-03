import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {}

  async createUser(name: string, email: string, phone: string): Promise<User> {
    const user = new User({ name, email, phone });
    await user.save();
    console.log(user);
    return user;
  }

  async getUserById(id: string): Promise<User> {
    return this.userModel.findByPk(id);
  }
}
