import { userAdapter, userSessionAdapter } from "@client/api/data-adapter";
import {
  ReturnResponse,
  UserResponse,
  UserSessionResponse,
} from "@client/type/dataResponse";
import { StateApp, ThunkAction, ThunkDispatch } from "@client/type/reducer";
import { ApiRoutes, changeParam } from "@config/api-routes";
import { COOKIE_NAME } from "@config/constants";
import { AxiosError, AxiosInstance, AxiosResponse } from "axios";
import * as Cookies from "js-cookie";
import { Action as ReduxAction } from "redux";
import { User, UserSession } from "../../type/data";
import NameSpace from "../name-spaces";

enum ActionType {
  SET_AUTHORIZATION = "SET_AUTHORIZATION",
  SET_ERROR = "SET_ERROR",
  SET_SUCCESS = "SET_SUCCESS",
  SET_USER = "SET_USER",
  SET_SESSION = "SET_SESSION",
  RESET_SESSION = "RESET_SESSION",
  RESET_USER = "RESET_USER",
}
export interface State {
  isAuthorization: boolean;
  userSession: UserSession;
  user: User;
  success: boolean;
  message: string;
}
interface SetAuthorization extends ReduxAction {
  type: typeof ActionType.SET_AUTHORIZATION;
  payload: boolean;
}
interface SetError extends ReduxAction {
  type: typeof ActionType.SET_ERROR;
  payload: string;
}
interface SetSuccess extends ReduxAction {
  type: typeof ActionType.SET_SUCCESS;
  payload: boolean;
}
interface SetUser extends ReduxAction {
  type: typeof ActionType.SET_USER;
  payload: User;
}
interface SetSession extends ReduxAction {
  type: typeof ActionType.SET_SESSION;
  payload: UserSession;
}
interface ResetSession extends ReduxAction {
  type: typeof ActionType.RESET_SESSION;
  payload: UserSession;
}
interface ResetUser extends ReduxAction {
  type: typeof ActionType.RESET_USER;
  payload: User;
}
export type Action =
  | SetAuthorization
  | SetError
  | SetSuccess
  | SetUser
  | SetSession
  | ResetUser
  | ResetSession;

const initialState: State = {
  isAuthorization: false,
  user: undefined,
  userSession: undefined,
  message: ``,
  success: false,
};

const ActionCreator = {
  setAuthorization: (status: boolean): SetAuthorization => {
    return {
      type: ActionType.SET_AUTHORIZATION,
      payload: status,
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
  setUser: (user: UserResponse): SetUser => {
    return {
      type: ActionType.SET_USER,
      payload: userAdapter(user),
    };
  },
  setSession: (userSession: UserSessionResponse): SetSession => {
    return {
      type: ActionType.SET_SESSION,
      payload: userSessionAdapter(userSession),
    };
  },
  resetUser: (): ResetUser => {
    return {
      type: ActionType.RESET_USER,
      payload: initialState.user,
    };
  },
  ResetSession: (): ResetSession => {
    return {
      type: ActionType.RESET_SESSION,
      payload: initialState.userSession,
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
        .post(ApiRoutes.SIGN_iN, {
          email,
          password,
        })
        .then(
          (response: AxiosResponse<Record<string, ReturnResponse>>): void => {
            const data: ReturnResponse = response.data;
            Cookies.set(COOKIE_NAME, data.token, {expires: 7});
            dispatch(Operation.loadSession(data.token));
          },
        )
        .catch((error: AxiosError): void => {
          dispatch(ActionCreator.setError(error.toString()));
          dispatch(ActionCreator.setAuthorization(false));
        });
    };
  },
  signUp: (email: string, password: string, login: string): ThunkAction => {
    return (
      dispatch: ThunkDispatch,
      _getState: () => StateApp,
      api: AxiosInstance,
    ): Promise<void> => {
      return api
        .post(ApiRoutes.SIGN_UP, {
          email,
          password,
          login,
        })
        .then(
          (response: AxiosResponse<Record<string, ReturnResponse>>): void => {
            const data: ReturnResponse = response.data;
            dispatch(ActionCreator.setSuccess(data.success));
            dispatch(ActionCreator.setError(data.message));
          },
        )
        .catch((error: AxiosError): void => {
          dispatch(ActionCreator.setError(error.toString()));
          dispatch(ActionCreator.setAuthorization(false));
        });
    };
  },
  loadUser: (id: string): ThunkAction => {
    return (
      dispatch: ThunkDispatch,
      _getState: () => StateApp,
      api: AxiosInstance,
    ): Promise<void> => {
      return api
        .get(changeParam(id, ApiRoutes.GET_USER))
        .then(
          (
            response: AxiosResponse<Record<string, UserSessionResponse>>,
          ): void => {
            const data: UserSessionResponse = response.data;
            dispatch(ActionCreator.setUser(data));
          },
        )
        .catch((error: AxiosError): void => {
          dispatch(ActionCreator.setError(error.message));
        });
    };
  },
  loadSession: (token: string): ThunkAction => {
    return (
      dispatch: ThunkDispatch,
      _getState: () => StateApp,
      api: AxiosInstance,
    ): Promise<void> => {
      return api
        .get(changeParam(token, ApiRoutes.GET_USER_SESSION))
        .then(
          (
            response: AxiosResponse<Record<string, UserSessionResponse>>,
          ): void => {
            const data: UserSessionResponse = response.data;
            dispatch(ActionCreator.setSession(data));
            dispatch(ActionCreator.setAuthorization(true));
            dispatch(Operation.loadUser(data.userId.toString()));
          },
        )
        .catch((error: AxiosError): void => {
          dispatch(ActionCreator.setError(error.toString()));
          dispatch(ActionCreator.setAuthorization(false));
        });
    };
  },
  logout: (): ThunkAction => {
    return (
      dispatch: ThunkDispatch,
      _getState: () => StateApp,
      api: AxiosInstance,
    ): Promise<void> => {
      const token = _getState()[NameSpace.USER].userSession.id;
      const url = changeParam(token, ApiRoutes.LOGOUT);
      return api
        .get(url)
        .then((response: AxiosResponse<Record<string, any>>): void => {
          Cookies.remove(COOKIE_NAME);
          dispatch(ActionCreator.resetUser());
          dispatch(ActionCreator.ResetSession());
          dispatch(ActionCreator.setAuthorization(false));
        })
        .catch((error: AxiosError): void => {
          dispatch(ActionCreator.setError(error.toString()));
          dispatch(ActionCreator.resetUser());
          dispatch(ActionCreator.ResetSession());
          dispatch(ActionCreator.setAuthorization(false));
        });
    };
  },
};

const reducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionType.SET_AUTHORIZATION:
      return {...state, isAuthorization: action.payload};

    case ActionType.SET_USER:
      return {...state, user: action.payload};

    case ActionType.SET_ERROR:
      return {...state, message: action.payload};

    case ActionType.SET_SUCCESS:
      return {...state, success: action.payload};

    case ActionType.SET_SESSION:
      return {...state, userSession: action.payload};

    case ActionType.RESET_USER:
      return {...state, user: action.payload};

    case ActionType.RESET_SESSION:
      return {...state, userSession: action.payload};

    default:
      return state;
  }
};

export { ActionType, initialState, ActionCreator, Operation, reducer };
