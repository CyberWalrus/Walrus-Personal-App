import { InputCustomInterface } from "@client/type/component";

export enum FormType {
  SIGN_IN = "SIGN_IN",
  SIGN_UP = "SIGN_UP",
  USER_ROLE = "USER_ROLE",
  USER = "USER",
}

export const inputCustomOptions: InputCustomInterface[] = [
  {
    formTypes: [FormType.SIGN_UP],
    type: `text`,
    name: `login`,
    placeHolder: `Login`,
    hidenValue: `Login`,
  },
  {
    formTypes: [FormType.SIGN_UP, FormType.SIGN_IN],
    type: `email`,
    name: `email`,
    placeHolder: `Email address`,
    hidenValue: `Email address`,
  },
  {
    formTypes: [FormType.SIGN_UP, FormType.SIGN_IN],
    type: `password`,
    name: `password`,
    placeHolder: `Password`,
    hidenValue: `Password`,
  },
  {
    formTypes: [FormType.SIGN_UP],
    type: `password`,
    name: `passwordConfirm`,
    placeHolder: `Confirm Password`,
    hidenValue: `Confirm Password`,
  },
  {
    formTypes: [FormType.USER_ROLE],
    type: `text`,
    name: `name`,
    placeHolder: `User Role`,
    hidenValue: `Add User Role`,
  },
];
