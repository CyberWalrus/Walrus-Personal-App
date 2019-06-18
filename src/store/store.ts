import {combineReducers} from "redux";
import {reducer as condition} from "./condition/condition";
import NameSpace from "./name-spaces";
import {StateApp} from "../type/reducer";

export default combineReducers<StateApp>({
  [NameSpace.CONDITION]: condition
});
