import { User, UserRole } from "../../type/data";
import { StateApp } from "../../type/reducer";
import NameSpace from "./../name-spaces";

const NAME_SPACE = NameSpace.DATA;

const getUsers = (state: StateApp): User[] => {
  return state[NAME_SPACE].users;
};
const getUser = (state: StateApp): User => {
  return state[NAME_SPACE].user;
};
const getUserRoles = (state: StateApp): UserRole[] => {
  return state[NAME_SPACE].userRoles;
};
export { getUsers, getUser, getUserRoles };
