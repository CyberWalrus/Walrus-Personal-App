import { User, UserRole, UserSession } from "@client/type/data";
import {
  UserResponse,
  UserRoleResponse,
  UserSessionResponse,
} from "@client/type/dataResponse";

const userAdapter = (data: UserResponse): User => {
  const userRoleId: string[] = [];
  userRoleId.push(data.userRole.toString());
  return {
    id: data._id,
    email: data.email,
    isActive: data.isActive,
    nickName: data.nickName,
    login: data.login,
    firstName: data.firstName,
    lastName: data.lastName,
    userRoleId,
    signUpDate: data.signUpDate,
    created: data.created,
  };
};
const userRoleAdapter = (data: UserRoleResponse): UserRole => {
  return {
    id: data._id,
    name: data.name,
    isActive: data.isActive,
  };
};
const userSessionAdapter = (data: UserSessionResponse): UserSession => {
  return {
    id: data._id,
    userId: data.userId.toString(),
    timestamp: data.timestamp,
    isActive: data.isActive,
  };
};

export { userAdapter, userRoleAdapter, userSessionAdapter };
