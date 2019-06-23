import {
  ThunkAction as ReduxThunkAction,
  ThunkDispatch as ReduxThunkDispatch,
} from "redux-thunk";
import {
  Action as ActionCondition,
  State as StateCondition,
} from "../store/condition/condition";
import NameSpace from "../store/name-spaces";
import { Action as ActionUser, State as StateUser } from "../store/user/user";

export interface StateApp {
  [NameSpace.CONDITION]: StateCondition;
  [NameSpace.USER]: StateUser;
}

export type ActionApp = ActionCondition | ActionUser;
export type ThunkDispatch = ReduxThunkDispatch<StateApp, {}, ActionApp>;
export type ThunkAction = ReduxThunkAction<
  Promise<void>,
  StateApp,
  {},
  ActionApp
>;
