enum RoutePath {
  INDEX = "/",
  LOGIN = "/login",
  SIGNUP = "/signup",
  OPTION = "/option",
  INFO = "/info",
  TIME = "/time",
  USER = "/user",
  USER_LOGIN = "/user/:id",
  ERROR = "/error",
}

export const getRoute = (value: string | number, routes: RoutePath): string => {
  return routes.replace(`:id`, value.toString());
};
export default RoutePath;
