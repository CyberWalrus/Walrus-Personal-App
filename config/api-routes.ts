export enum ApiRoutes {
  SIGN_iN = "/api/account/signin",
  SIGN_UP = "/api/account/signup",
  LOGOUT = "/api/accaunt/logout",
  GET_USERS = "/api/data/users",
  GET_USER = "/api/data/users/:id",
  ADD_USER = "/api/data/users/add",
  GET_USER_ROLES = "/api/data/user-roles",
  ADD_USER_ROLE = "/api/data/user-roles/add",
  CHANGE_USER_ROLE = "/api/data/user-roles/change/:id",
  CHANGE_USER_ROLES = "/api/data/user-roles/change",
  DELETE_USER_ROLE = "/api/data/user-roles/delete/:id",
  GET_USER_SESSION = "/api/data/user-sessions/:id",
  CHANGE_USER_SESSION = "/api/data/user-sessions/change/:id"
}

export const changeParam = (
  value: string | number,
  routes: ApiRoutes,
): string => {
  return routes.replace(`:id`, value.toString());
};
