import {
  ThunkAction as ReduxThunkAction,
  ThunkDispatch as ReduxThunkDispatch,
} from "redux-thunk";
import {
  Action as ActionCondition,
  State as StateCondition,
} from "../store/condition/condition";
import { Action as ActionData, State as StateData } from "../store/data/data";
import NameSpace from "../store/name-spaces";
import { Action as ActionUser, State as StateUser } from "../store/user/user";

export interface StateApp {
  [NameSpace.CONDITION]: StateCondition;
  [NameSpace.USER]: StateUser;
  [NameSpace.DATA]: StateData;
}

export type ActionApp = ActionCondition | ActionUser | ActionData;
export type ThunkDispatch = ReduxThunkDispatch<StateApp, {}, ActionApp>;
export type ThunkAction = ReduxThunkAction<
  Promise<void>,
  StateApp,
  {},
  ActionApp
>;
