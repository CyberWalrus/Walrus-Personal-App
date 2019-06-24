import { userAdapter } from "@client/api/data-adapter";
import { StateApp, ThunkAction, ThunkDispatch } from "@client/type/reducer";
import { AxiosError, AxiosInstance, AxiosResponse } from "axios";
import { Action as ReduxAction } from "redux";
import { User } from "../../type/data";
import { ReturnResponse, UserResponse } from "../../type/dataResponse";

enum ActionType {
  SET_USERS = "SET_USERS",
}
export interface State {
  users: User[];
}
interface SetUsers extends ReduxAction {
  type: typeof ActionType.SET_USERS;
  payload: User[];
}
export type Action = SetUsers;

const initialState: State = {
  users: [],
};

const ActionCreator = {
  setUsers: (users: UserResponse[]): SetUsers => {
    return {
      type: ActionType.SET_USERS,
      payload: users.map(userAdapter),
    };
  },
};

const Operation = {
  getUsers: (email: string, password: string): ThunkAction => {
    return (
      dispatch: ThunkDispatch,
      _getState: () => StateApp,
      api: AxiosInstance,
    ): Promise<void> => {
      return api
        .get(`account/signin`)
        .then((response: AxiosResponse<Array<Record<string, any>>>): void => {
          const data: UserResponse[] = response.data;
          dispatch(ActionCreator.setUsers(data));
        });
    };
  },
};

const reducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionType.SET_USERS:
      return {...state, users: action.payload};

    default:
      return state;
  }
};

export { ActionType, initialState, ActionCreator, Operation, reducer };
