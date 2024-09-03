import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserService } from './user.service';

@Controller('api/v1')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post('add-user')
  async addUser(
    @Body('name') name: string,
    @Body('email') email: string,
    @Body('phone') phone: string,
  ) {
    return this.userService.createUser(name, email, phone);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('get-user/:id')
  async getUser(@Param('id') id: string) {
    return this.userService.getUserById(id);
  }
}
