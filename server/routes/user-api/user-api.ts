import {
  ReturnResponse,
  UserResponse,
  UserSessionResponse,
} from "@client/type/dataResponse";
import { ApiRoutes } from "@config/api-routes";
import { UserRole, UserRoleProps } from "@server/models/user-role-schema";
import { User, UserProps } from "@server/models/user-schema";
import {
  UserSession,
  UserSessionProps,
} from "@server/models/user-session-schema";
import * as bcrypt from "bcrypt";
import { Errback, Express, NextFunction, Request, Response } from "express";

const generateHash = (password: string): string => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
};

const validPassword = (password: string, passwordUser: string): boolean => {
  return bcrypt.compareSync(password, passwordUser);
};
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
export interface TokenBody {
  token: number;
}

export const userApi = (app: Express): void => {
  app.get(
    ApiRoutes.GET_USERS,
    (req: Request, res: Response, next: NextFunction): void => {
      User.find()
        .exec()
        .then((users: UserProps) => res.json(users))
        .catch((error: Errback) => next(error));
    },
  );

  app.post(
    ApiRoutes.SIGN_UP,
    (req: Request, res: Response, next: NextFunction): void | Response => {
      const body: UserAddBody = req.body;
      const {login, password}: UserAddBody = body;
      let {email}: UserAddBody = body;

      if (!email) {
        return res.send({
          success: false,
          message: `Error: Email cannot be blank.`,
        });
      }
      if (!login) {
        return res.send({
          success: false,
          message: `Error: Login cannot be blank.`,
        });
      }
      if (!password) {
        return res.send({
          success: false,
          message: `Error: Password cannot be blank.`,
        });
      }
      email = email.toLowerCase();
      email = email.trim();
      let loginSign = login.toLowerCase();
      loginSign = loginSign.trim();
      User.find(
        {
          email,
        },
        (error: Errback, previousUsers: UserProps[]) => {
          if (error) {
            return res.send({
              success: false,
              message: `Error: Server error`,
            });
          } else if (previousUsers.length > 0) {
            return res.send({
              success: false,
              message: `Error: Account already exist.`,
            });
          }
          const newUser = new User();
          newUser.login = login;
          newUser.email = email;
          newUser.password = generateHash(password);
          newUser.save(
            (errorSave: Errback, user: UserProps): Response => {
              if (errorSave) {
                return res.send({
                  success: false,
                  message: `Error: Server error`,
                });
              }
              return res.send({
                success: true,
                message: `Signed up`,
              });
            },
          );
        },
      );
    },
  );

  app.post(
    ApiRoutes.SIGN_iN,
    async (req: Request, res: Response, next: NextFunction): Promise<any> => {
      const body: UserSignInBody = req.body;
      const {password}: UserSignInBody = body;
      let {email}: UserSignInBody = body;
      if (!email) {
        return res.send({
          success: false,
          message: `Error: Email cannot be blank.`,
        });
      }
      if (!password) {
        return res.send({
          success: false,
          message: `Error: Password cannot be blank.`,
        });
      }
      email = email.toLowerCase();
      email = email.trim();
      User.find(
        {
          email,
        },
        (error: Errback, users: UserResponse[]) => {
          if (error) {
            return res.send({
              success: false,
              message: `Error: server error`,
            });
          }
          if (users.length !== 1) {
            return res.send({
              success: false,
              message: `Error: Invalid`,
            });
          }
          const user = users[0];
          if (validPassword(password, user.password)) {
            return res.send({
              success: false,
              message: `Error: Invalid`,
            });
          }
          const userSession = new UserSession();
          userSession.userId = user._id;
          userSession.userRole = user.userRole;
          userSession.userLogin = user.login;
          userSession.save((errorSave: Errback, doc: UserSessionResponse) => {
            if (errorSave) {
              return res.send({
                success: false,
                message: `Error: server error`,
              });
            }
            return res.send({
              success: true,
              message: `Valid sign in`,
              token: doc._id,
            });
          });
        },
      );
    },
  );

  app.get(
    ApiRoutes.LOGOUT,
    (req: Request, res: Response, next: NextFunction): void => {
      const body: TokenBody = req.body;
      const {token}: TokenBody = body;
      UserSession.findOneAndUpdate(
        {
          _id: token,
          isActive: true,
        },
        {
          $set: {
            isActive: false,
          },
        },
        undefined,
        (error: Errback, sessions: UserSessionProps) => {
          if (error) {
            return res.send({
              success: false,
              message: `Error: Server error`,
            });
          }
          return res.send({
            success: true,
            message: `Good`,
          });
        },
      );
    },
  );

  app.get(
    ApiRoutes.VERIFY,
    (req: Request, res: Response, next: NextFunction) => {
      const body: TokenBody = req.body;
      const {token}: TokenBody = body;
      UserSession.find(
        {
          _id: token,
          isActive: true,
        },
        (error: Errback, sessions: UserSessionProps[]) => {
          if (error) {
            return res.send({
              success: false,
              message: `Error: Server error`,
            });
          }
          if (sessions.length !== 1) {
            return res.send({
              success: false,
              message: `Error: Invalid`,
            });
          } else {
            return res.send({
              success: true,
              message: `Good`,
            });
          }
        },
      );
    },
  );
};
