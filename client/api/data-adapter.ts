import { User } from "@client/type/data";
import { UserResponse } from "@client/type/dataResponse";
import { string } from "prop-types";

const userAdapter = (data: UserResponse): User => {
  return {
    id: data._id,
    email: data.email,
    isActive: data.isActive,
    nickName: data.nickName,
    login: data.login,
    firstName: data.firstName,
    lastName: data.lastName,
    userRoleId: data.userRole.toString(),
    signUpDate: data.signUpDate,
    created: data.created,
  };
};

export { userAdapter };
