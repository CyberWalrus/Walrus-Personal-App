import { FormType } from "../../config/constants";
import { Option } from "../hocs/with-form-state/with-form-state";
import { InputCustomInterface } from "../type/component";
import { User, UserRole } from "../type/data";

// tslint:disable-next-line:no-empty
const _functVoid = (): void => {};

const FORM_TYPE: FormType = FormType.SIGN_IN;

const user: User = {
  id: `test`,
  email: `test`,
  isActive: true,
  nickName: `test`,
  login: `test`,
  firstName: `test`,
  lastName: `test`,
  userRoleId: [`test`],
  signUpDate: 1234567,
  created: 1234567,
};
const userRole: UserRole = {
  id: `test`,
  name: `test`,
  isActive: true,
};
const optionForm: Option = {
  values: {},
  formErrors: {},
  formValid: true,
  onChangeUserInput: _functVoid,
  onClickSubmit: _functVoid,
};
const optionInput: InputCustomInterface = {
  formTypes: [FormType.SIGN_UP],
  type: `text`,
  name: `login`,
  placeHolder: `Login`,
  hidenValue: `Login`,
};

const usersEmpty: User[] = [];
const users: User[] = [user, user];

const userRolesEmpty: UserRole[] = [];
const userRoles: UserRole[] = [userRole, userRole];

export {
  user,
  usersEmpty,
  users,
  optionForm,
  FORM_TYPE,
  optionInput,
  userRole,
  userRolesEmpty,
  userRoles,
};
