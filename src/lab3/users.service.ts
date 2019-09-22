import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

import { IUser } from '@models/user.models';

@Injectable()
export class UsersService {
  public findAll(): IUser[] {
    return this.getUsers();
  }

  public addUser(user: IUser): IUser {
    const users: IUser[] = this.getUsers();

    users.push(user);

    this.setUsers(users);

    return user;
  }

  public editUser(editingUser: IUser): IUser {
    const users: IUser[] = this.getUsers()
      .map((user: IUser) => {
        if (user.id === editingUser.id) {
          return editingUser;
        }

        return user;
      });

    this.setUsers(users);

    return editingUser;
  }

  public removeUser(userId: string): IUser {
    let userToDelete: IUser = null;
    const users: IUser[] = this.getUsers()
      .filter((user: IUser) => {
        if (user.id === userId) {
          userToDelete = user;
        }

        return user.id !== userId;
      });

    this.setUsers(users);

    return userToDelete;
  }

  public removeAllUsers(): void {
    this.setUsers([]);
  }

  private getUsers(): IUser[] {
    let users: IUser[] = [];

    try {
      users = JSON.parse(fs.readFileSync(path.join(__dirname, './users.json'), 'utf8'));
    } catch (error) {
      this.setUsers([]);
    }

    return users;
  }

  private setUsers(users: IUser[]): void {
    fs.writeFileSync(path.join(__dirname, 'users.json'), JSON.stringify(users));
  }
}
