import {Action as ReduxAction} from "redux";

enum ActionType {
  SET_ID = "SET_ID"
}
export interface State {
  id: number
}
interface ChangeID extends ReduxAction {
  type: ActionType;
  payload: number;
}
export type Action = ChangeID;

const initialState: State = {
  id: 0
};

const ActionCreator = {
  changeGenre: (value: number): ChangeID => {
    return {
      type: ActionType.SET_ID,
      payload: value
    };
  }
};

const reducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionType.SET_ID:
      return Object.assign({}, state, {
        id: action.payload
      });
  }
  return state;
};

export {initialState, ActionCreator, ActionType, reducer};
