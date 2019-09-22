import { Controller, Get, Post, Body, Delete, Param, Patch } from '@nestjs/common';

import { UsersService } from './users.service';

import { IUser } from '@models/user.models';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
  ) { }

  @Get()
  public getAllUsers(): IUser[] {
    return this.usersService.findAll();
  }

  @Post()
  public addUser(@Body() newUser: IUser): IUser {
    return this.usersService.addUser(newUser);
  }

  @Patch()
  public editUser(@Body() user: IUser): IUser {
    return this.usersService.editUser(user);
  }

  @Delete()
  public removeAllUsers(): void {
    this.usersService.removeAllUsers();
  }

  @Delete(':userId')
  public removeUser(@Param('userId') userId: string): IUser {
    return this.usersService.removeUser(userId);
  }
}
