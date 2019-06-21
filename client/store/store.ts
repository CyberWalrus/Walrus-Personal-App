import { combineReducers } from "redux";
import { StateApp } from "../type/reducer";
import { reducer as condition } from "./condition/condition";
import NameSpace from "./name-spaces";

export default combineReducers<StateApp>({
  [NameSpace.CONDITION]: condition,
});
