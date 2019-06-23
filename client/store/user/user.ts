import { userAdapter } from "@client/api/data-adapter";
import { StateApp, ThunkAction, ThunkDispatch } from "@client/type/reducer";
import { AxiosError, AxiosInstance, AxiosResponse } from "axios";
import { Action as ReduxAction } from "redux";
import { User } from "../../type/data";
import { UserResponse } from "../../type/dataResponse";

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
      payload: userAdapter(user),
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
    return (
      dispatch: ThunkDispatch,
      _getState: () => StateApp,
      api: AxiosInstance,
    ): Promise<void> => {
      return api
        .post(`account/signin`, {
          email,
          password,
        })
        .then((response: AxiosResponse<Record<string, any>>): void => {
          dispatch(ActionCreator.requireAuthorization(true));
          dispatch(ActionCreator.setError(`ok`));
        })
        .catch((error: AxiosError): void => {
          dispatch(ActionCreator.setError(error.toString()));
          dispatch(ActionCreator.requireAuthorization(false));
        });
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
