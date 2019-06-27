import { User } from "../../type/data";
import { StateApp } from "../../type/reducer";
import NameSpace from "./../name-spaces";

const NAME_SPACE = NameSpace.USER;

const getAuthorization = (state: StateApp): boolean => {
  return state[NAME_SPACE].isAuthorization;
};
const getUser = (state: StateApp): User => {
  return state[NAME_SPACE].user;
};
const getError = (state: StateApp): string => {
  return state[NAME_SPACE].message;
};
const getSuccess = (state: StateApp): boolean => {
  return state[NAME_SPACE].success;
};

export { getUser, getAuthorization, getError, getSuccess };
