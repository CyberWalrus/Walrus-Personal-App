import { combineReducers } from "redux";
import { StateApp } from "../type/reducer";
import {
  initialState as initialStateCondition,
  reducer as condition,
} from "./condition/condition";
import { initialState as initialStateData, reducer as data } from "./data/data";
import NameSpace from "./name-spaces";
import { initialState as initialStateUser, reducer as user } from "./user/user";
export const initialState = {
  [NameSpace.CONDITION]: initialStateCondition,
  [NameSpace.USER]: initialStateUser,
  [NameSpace.DATA]: initialStateData,
};
export default combineReducers<StateApp>({
  [NameSpace.CONDITION]: condition,
  [NameSpace.USER]: user,
  [NameSpace.DATA]: data,
});
