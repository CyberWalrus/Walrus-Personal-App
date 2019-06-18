import {
  ThunkDispatch as ReduxThunkDispatch,
  ThunkAction as ReduxThunkAction
} from "redux-thunk";
import {
  State as StateCondition,
  Action as ActionCondition
} from "../store/condition/condition";
import NameSpace from "../store/name-spaces";

export interface StateApp {
  [NameSpace.CONDITION]: StateCondition;
}

export type ActionApp = ActionCondition;
export type ThunkDispatch = ReduxThunkDispatch<StateApp, {}, ActionApp>;
export type ThunkAction = ReduxThunkAction<
  Promise<void>,
  StateApp,
  {},
  ActionApp
>;
