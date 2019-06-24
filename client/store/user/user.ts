import { userAdapter } from "@client/api/data-adapter";
import { StateApp, ThunkAction, ThunkDispatch } from "@client/type/reducer";
import { AxiosError, AxiosInstance, AxiosResponse } from "axios";
import { Action as ReduxAction } from "redux";
import { User } from "../../type/data";
import { ReturnResponse, UserResponse } from "../../type/dataResponse";

enum ActionType {
  REQUIRED_AUTHORIZATION = "REQUIRED_AUTHORIZATION",
  SIGN_IN = "SIGN_IN",
  SET_ERROR = "SET_ERROR",
  SET_SUCCESS = "SET_SUCCESS",
  SET_TOKEN = "SET_TOKEN",
}
export interface State {
  isAuthorizationRequired: boolean;
  user: User;
  success: boolean;
  message: string;
  token: string;
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
interface SetSuccess extends ReduxAction {
  type: typeof ActionType.SET_SUCCESS;
  payload: boolean;
}
interface SetToken extends ReduxAction {
  type: typeof ActionType.SET_TOKEN;
  payload: string;
}
export type Action =
  | RequireAuthorization
  | SignIn
  | SetError
  | SetSuccess
  | SetToken;

const initialState: State = {
  isAuthorizationRequired: false,
  user: undefined,
  message: ``,
  success: false,
  token: ``,
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
      payload: initialState.message,
    };
  },
  setSuccess: (success: boolean): SetSuccess => {
    return {
      type: ActionType.SET_SUCCESS,
      payload: success,
    };
  },
  resetSuccess: (): SetSuccess => {
    return {
      type: ActionType.SET_SUCCESS,
      payload: initialState.success,
    };
  },
  setToken: (token: string): SetToken => {
    return {
      type: ActionType.SET_TOKEN,
      payload: token,
    };
  },
  resetToken: (): SetToken => {
    return {
      type: ActionType.SET_TOKEN,
      payload: initialState.token,
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
  signUp: (email: string, password: string, login: string): ThunkAction => {
    return (
      dispatch: ThunkDispatch,
      _getState: () => StateApp,
      api: AxiosInstance,
    ): Promise<void> => {
      const firstName = ``;
      const lastName = ``;
      return api
        .post(`account/signup`, {
          email,
          password,
          login,
          firstName,
          lastName,
        })
        .then((response: AxiosResponse<Record<string, ReturnResponse>>): void => {
          const data: ReturnResponse = response.data;
          dispatch(ActionCreator.setSuccess(data.success));
          dispatch(ActionCreator.setError(data.message));
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
      return {...state, message: action.payload};

    case ActionType.SET_SUCCESS:
      return {...state, success: action.payload};

    case ActionType.SET_TOKEN:
      return {...state, token: action.payload};

    default:
      return state;
  }
};

export { ActionType, initialState, ActionCreator, Operation, reducer };
