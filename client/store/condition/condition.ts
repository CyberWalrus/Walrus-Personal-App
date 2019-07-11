import { Action as ReduxAction } from "redux";

export enum TypeNotification {
  NONE = "",
  SUCCESS = "SUCCESS",
  FAIL = "FAIL",
}

enum ActionType {
  SET_MESSAGE = "SET_MESSAGE",
  SET_TYPE = "SET_TYPE",
}
export interface State {
  typeNotification: TypeNotification;
  message: string;
}
interface SetTypeNotification extends ReduxAction {
  payload: TypeNotification;
  type: ActionType.SET_TYPE;
}
interface SetMessage extends ReduxAction {
  payload: string;
  type: ActionType.SET_MESSAGE;
}
export type Action = SetTypeNotification & SetMessage;

const initialState: State = {
  typeNotification: TypeNotification.NONE,
  message: ``,
};

const ActionCreator = {
  setType: (value: TypeNotification): SetTypeNotification => {
    return {
      payload: value,
      type: ActionType.SET_TYPE,
    };
  },
  setMessage: (value: string): SetMessage => {
    return {
      payload: value,
      type: ActionType.SET_MESSAGE,
    };
  },
};

const reducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionType.SET_MESSAGE:
      return { ...state, message: action.payload };
  }
  return state;
};

export { initialState, ActionCreator, ActionType, reducer };
