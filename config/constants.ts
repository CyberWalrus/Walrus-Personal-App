export enum FormType {
  SIGN_IN = "SIGN_IN",
  SIGN_OUT = "SIGN_OUT",
  USER_ROLE = "USER_ROLE",
  USER = "USER",
}

export const InputCustomOptions = {
  email: {
    key: 1,
    type: `email`,
    name: `email`,
    placeHolder: `Email address`,
    hidenValue: `Email address`,
  },
  password: {
    key: 2,
    type: `password`,
    name: `password`,
    placeHolder: `Password`,
    hidenValue: `Password`,
  },
};
