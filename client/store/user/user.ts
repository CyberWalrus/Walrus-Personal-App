import { Action as ReduxAction } from "redux";
import { User } from "../../type/data";
import { UserResponse } from "../../type/dataResponse";
import { StateApp, ThunkAction, ThunkDispatch } from "../../type/reducer";

enum ActionType {
  REQUIRED_AUTHORIZATION = "REQUIRED_AUTHORIZATION",
  SIGN_IN = "SIGN_IN",
  SET_ERROR = "SET_ERROR",
}
export interface State {
  isAuthorizationRequired: boolean;
  user: User;
  errorMessage: string;
}
interface RequireAuthorization extends ReduxAction {
  type: typeof ActionType.REQUIRED_AUTHORIZATION;
  payload: boolean;
}
interface SignIn extends ReduxAction {
  type: typeof ActionType.SIGN_IN;
  payload: User;
}
interface SetError extends ReduxAction {
  type: typeof ActionType.SET_ERROR;
  payload: string;
}
export type Action = RequireAuthorization | SignIn | SetError;

const initialState: State = {
  isAuthorizationRequired: false,
  user: undefined,
  errorMessage: ``,
};

const ActionCreator = {
  requireAuthorization: (status: boolean): RequireAuthorization => {
    return {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: status,
    };
  },
  signIn: (user: UserResponse): SignIn => {
    return {
      type: ActionType.SIGN_IN,
      payload: user,
    };
  },
  setError: (error: string): SetError => {
    return {
      type: ActionType.SET_ERROR,
      payload: error,
    };
  },
  resetError: (): SetError => {
    return {
      type: ActionType.SET_ERROR,
      payload: initialState.errorMessage,
    };
  },
};

const Operation = {
  signIn: (email: string, password: string): ThunkAction => {
    return (dispatch: ThunkDispatch, _getState: () => StateApp): any => {
      const data: UserResponse = {email, password};
      dispatch(ActionCreator.signIn(data));
      dispatch(ActionCreator.requireAuthorization(true));
    };
  },
};

const reducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return {...state, isAuthorizationRequired: action.payload};

    case ActionType.SIGN_IN:
      return {...state, user: action.payload};

    case ActionType.SET_ERROR:
      return {...state, errorMessage: action.payload};

    default:
      return state;
  }
};

export { ActionType, initialState, ActionCreator, Operation, reducer };
