import { UserRole as UserRoleClient } from "@client/type/data";
import {
  ReturnResponse,
  UserResponse,
  UserRoleResponse,
  UserSessionResponse,
} from "@client/type/dataResponse";
import { ApiRoutes } from "@config/api-routes";
import { UserRole, UserRoleProps } from "@server/models/user-role-schema";
import { Errback, Express, NextFunction, Request, Response } from "express";

export interface UserAddBody {
  login: string;
  password: string;
  email: string;
}
export interface UserSignInBody {
  password: string;
  email: string;
}
export interface UserRoleBody {
  name: string;
}
export interface UserRolesChangeBody {
  userRoles: UserRoleResponse[];
}
export interface UserRolesRemoveBody {
  id: string;
}
export interface TokenBody {
  token: number;
}
export interface SendObject {
  success?: boolean;
  message?: string;
  token?: string;
}
const sendSuccess: SendObject = {
  success: true,
  message: `Success`,
};
export const userRoleApi = (app: Express): void => {
  app.get(
    ApiRoutes.GET_USER_ROLES,
    (req: Request, res: Response, next: NextFunction): void => {
      UserRole.find()
        .exec()
        .then((userRoles: UserRoleProps) => res.json(userRoles))
        .catch((error: Errback) => next(error));
    },
  );
  app.post(
    ApiRoutes.ADD_USER_ROLE,
    (req: Request, res: Response, next: NextFunction): void => {
      const userRole = new UserRole();
      const body: UserRoleBody = req.body;
      const {name}: UserRoleBody = body;
      userRole.name = name;
      userRole
        .save()
        .then(() => res.send(sendSuccess))
        .catch((error: Errback) => next(error));
    },
  );

  app.post(
    ApiRoutes.CHANGE_USER_ROLE,
    (req: Request, res: Response, next: NextFunction): void => {
      const userRole = new UserRole();
      const body: UserRoleClient = req.body;
      const {name, isActive}: UserRoleClient = body;
      UserRole.findByIdAndUpdate(req.params.id, {name, isActive})
        .exec()
        .then(() => res.send(sendSuccess))
        .catch((error: Errback) => next(error));
    },
  );

  app.get(
    ApiRoutes.CHANGE_USER_ROLES,
    (req: Request, res: Response, next: NextFunction): void => {
      UserRole.find()
        .exec()
        .then((userRoles: UserRoleProps[]) => {
          return res.json(userRoles);
        })
        .catch((error: Errback) => next(error));
    },
  );

  app.delete(
    ApiRoutes.DELETE_USER_ROLE,
    (req: Request, res: Response, next: NextFunction): void => {
      UserRole.findByIdAndDelete(req.params.id)
        .exec()
        .then(() => res.send(sendSuccess))
        .catch((error: Errback) => next(error));
    },
  );
};
