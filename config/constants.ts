export enum FormType {
  SIGN_IN = "SIGN_IN",
  SIGN_OUT = "SIGN_OUT",
  USER_ROLE = "USER_ROLE",
  USER = "USER",
}

export const InputCustomOptions = {
  email: {
    type: `email`,
    name: `email`,
    placeHolder: `Email address`,
    hidenValue: `Email address`,
  },
  password: {
    type: `password`,
    name: `password`,
    placeHolder: `Password`,
    hidenValue: `Password`,
  },
};
