import * as express from "express";
import { Express } from "express";
import { userApi } from "./user-api/user-api";
import { userRoleApi } from "./user-role-api/user-role-api";

export const useApi = (app: Express): void => {
  userApi(app);
  userRoleApi(app);
};
