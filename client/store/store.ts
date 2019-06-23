import { combineReducers } from "redux";
import { StateApp } from "../type/reducer";
import { reducer as condition } from "./condition/condition";
import NameSpace from "./name-spaces";
import { reducer as user } from "./user/user";

export default combineReducers<StateApp>({
  [NameSpace.CONDITION]: condition,
  [NameSpace.USER]: user,
});
