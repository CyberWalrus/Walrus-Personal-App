import { StateApp } from "../../type/reducer";
import NameSpace from "./../name-spaces";

const NAME_SPACE = NameSpace.CONDITION;

const getID = (state: StateApp): number => {
  return state[NAME_SPACE].id;
};
export { getID };
