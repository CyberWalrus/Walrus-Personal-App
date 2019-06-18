import {
  ThunkAction as ReduxThunkAction,
  ThunkDispatch as ReduxThunkDispatch,
} from "redux-thunk";
import {
  Action as ActionCondition,
  State as StateCondition,
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
