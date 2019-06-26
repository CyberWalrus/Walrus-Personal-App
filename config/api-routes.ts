export enum ApiRoutes {
  SIGN_iN = "/api/account/signin",
  SIGN_UP = "/api/account/signup",
  LOGOUT = "/api/accaunt/logout",
  VERIFY = "/api/accaunt/verify",
  GET_USERS = "/api/data/users",
  ADD_USER = "/api/data/users/add",
  GET_USER_ROLES = "/api/data/user-roles",
  ADD_USER_ROLE = "/api/data/user-roles/add",
  CHANGE_USER_ROLES = "/api/data/user-roles/change",
  REMUVE_USER_ROLES = "/api/data/user-roles/remuve/:id",
}

export const changeParam = (
  value: string | number,
  routes: ApiRoutes,
): string => {
  return routes.replace(`:id`, value.toString());
};
