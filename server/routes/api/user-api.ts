import { User } from "@server/models/user-schema";
import { Errback, Express, NextFunction, Request, Response } from "express";

export const userApi = async (app: Express): Promise<void> => {
  app.get(`/api/users`, (req: Request, res: Response, next: NextFunction) => {
    User.find()
      .exec()
      .then((user: any): any => res.json(user))
      .catch((error: Errback) => next(error));
  });

  app.post(
    `/api/users/add`,
    (req: Request, res: Response, next: NextFunction) => {
      const counter = new User();
      counter.email = req.body.email;
      counter.password = req.body.password;

      counter
        .save()
        .then(() => res.json(counter))
        .catch((err: Errback) => next(err));
    },
  );
};
