export interface User {
  id: string;
  email: string;
  isActive: boolean;
  nickName: string;
  login: string;
  firstName: string;
  lastName: string;
  userRoleId: string;
  signUpDate: number;
  created: number;
}
export interface UserRole {
  id: string;
  name: string;
  isActive: boolean;
}
