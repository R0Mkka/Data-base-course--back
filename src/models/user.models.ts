export enum UserRoles {
  Student = 'Student',
  Teacher = 'Teacher',
  Admin = 'Admin',
}

export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  role: UserRoles;
  educationalInstitution: string;
  email: string;
  password: string;
}
