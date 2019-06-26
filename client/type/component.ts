import { FormType } from "@config/constants";

export interface InputCustomInterface {
  formTypes: FormType[];
  type: string;
  name: string;
  placeHolder: string;
  hidenValue: string;
}
