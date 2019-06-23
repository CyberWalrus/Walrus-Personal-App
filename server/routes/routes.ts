import { Express } from "express";
import * as fs from "fs";
import * as path from "path";

export const routes = (app: Express): void => {
  fs.readdirSync(__dirname + `/api/`).forEach((file: string): void => {
    require(`./api/${file.substr(0, file.indexOf(`.`))}`)(app);
  });
};
