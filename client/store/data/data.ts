import { userAdapter, userRoleAdapter } from "@client/api/data-adapter";
import { StateApp, ThunkAction, ThunkDispatch } from "@client/type/reducer";
import { ApiRoutes, changeParam } from "@config/api-routes";
import { AxiosError, AxiosInstance, AxiosResponse } from "axios";
import { Action as ReduxAction } from "redux";
import { User, UserRole } from "../../type/data";
import {
  ReturnResponse,
  UserResponse,
  UserRoleResponse,
} from "../../type/dataResponse";
import NameSpace from "../name-spaces";

enum ActionType {
  SET_USERS = "SET_USERS",
  SET_USERS_ROLE = "SET_USERS_ROLE",
}
export interface State {
  users: User[];
  userRoles: UserRole[];
}
interface SetUsers extends ReduxAction {
  type: typeof ActionType.SET_USERS;
  payload: User[];
}
interface SetUserRoles extends ReduxAction {
  type: typeof ActionType.SET_USERS_ROLE;
  payload: UserRole[];
}
export type Action = SetUsers | SetUserRoles;

const initialState: State = {
  users: [],
  userRoles: [],
};

const ActionCreator = {
  setUsers: (users: UserResponse[]): SetUsers => {
    return {
      type: ActionType.SET_USERS,
      payload: users.map(userAdapter),
    };
  },
  setUserRoles: (userRoles: UserRoleResponse[]): SetUserRoles => {
    return {
      type: ActionType.SET_USERS_ROLE,
      payload: userRoles.map(userRoleAdapter),
    };
  },
  updateUserRoles: (userRoles: UserRole[]): SetUserRoles => {
    return {
      type: ActionType.SET_USERS_ROLE,
      payload: userRoles,
    };
  },
};

const Operation = {
  getUsers: (): ThunkAction => {
    return (
      dispatch: ThunkDispatch,
      _getState: () => StateApp,
      api: AxiosInstance,
    ): Promise<void> => {
      return api
        .get(ApiRoutes.GET_USERS)
        .then(
          (
            response: AxiosResponse<Array<Record<string, UserResponse>>>,
          ): void => {
            const data: UserResponse[] = response.data;
            dispatch(ActionCreator.setUsers(data));
          },
        );
    };
  },
  getUserRoles: (): ThunkAction => {
    return (
      dispatch: ThunkDispatch,
      _getState: () => StateApp,
      api: AxiosInstance,
    ): Promise<void> => {
      return api
        .get(ApiRoutes.GET_USER_ROLES)
        .then(
          (
            response: AxiosResponse<Array<Record<string, UserRoleResponse>>>,
          ): void => {
            const data: UserRoleResponse[] = response.data;
            dispatch(ActionCreator.setUserRoles(data));
          },
        );
    };
  },
  addUserRole: (name: string): ThunkAction => {
    return (
      dispatch: ThunkDispatch,
      _getState: () => StateApp,
      api: AxiosInstance,
    ): Promise<void> => {
      return api.post(ApiRoutes.ADD_USER_ROLE, {name}).then((): void => {
        dispatch(Operation.getUserRoles());
      });
    };
  },
  removeUserRole: (id: string): ThunkAction => {
    return (
      dispatch: ThunkDispatch,
      _getState: () => StateApp,
      api: AxiosInstance,
    ): Promise<void> => {
      return api
        .delete(changeParam(id, ApiRoutes.REMUVE_USER_ROLES))
        .then((): void => {
          dispatch(Operation.getUserRoles());
        });
    };
  },
};

const reducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionType.SET_USERS:
      return {...state, users: action.payload};
    case ActionType.SET_USERS_ROLE:
      return {...state, userRoles: action.payload};

    default:
      return state;
  }
};

export { ActionType, initialState, ActionCreator, Operation, reducer };
