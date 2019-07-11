import { StateApp } from "../../type/reducer";
import NameSpace from "./../name-spaces";
import { TypeNotification } from "./condition";

const NAME_SPACE = NameSpace.CONDITION;

const getMessage = (state: StateApp): string => {
  return state[NAME_SPACE].message;
};
const getTypeNotification = (state: StateApp): TypeNotification => {
  return state[NAME_SPACE].typeNotification;
};
export { getMessage, getTypeNotification };
