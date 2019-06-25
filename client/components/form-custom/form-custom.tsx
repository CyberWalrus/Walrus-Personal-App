import withFormState from "@client/hocs/with-authorization-state/with-authorization-state";
import { FormType, InputCustomOptions as options } from "@config/constants";
import * as React from "react";
import { ComponentClass, Fragment, FunctionComponent, ReactElement } from "react";
import { compose } from "redux";
import InputCustom from "../input-custom/input-custom";

interface PropsInsert {
  titel: string;
  formType: FormType;
}
interface PropsHoc {
  option: Option;
}
interface Option {
  email: string;
  password: string;
  formErrors: object;
  formValid: boolean;
  onChangeUserInput: () => void;
  onClickSubmit: () => void;
}
type Props = PropsHoc & PropsInsert;
const FormCustom: FunctionComponent<Props> = ({
  titel,
  option,
}: Props): ReactElement => {
  const {
    email,
    password,
    formErrors,
    formValid,
    onChangeUserInput,
    onClickSubmit,
  }: Option = option;
  const inputs: ReactElement[] = [];
  inputs.push(
    <InputCustom
      key={options.email.key}
      option={options.email}
      value={email}
      onChangeInput={onChangeUserInput}
    />,
  );
  inputs.push(
    <InputCustom
      key={options.password.key}
      option={options.password}
      value={password}
      onChangeInput={onChangeUserInput}
    />,
  );
  return (
    <form onSubmit={onClickSubmit} className={`form-custom`}>
      <div className={`form-custom__titel`}>
        <h2>{titel}</h2>
      </div>
      <div className={`form-custom__message`}>
        {formErrors &&
          Object.keys(formErrors).map(
            (fieldName: string, i: number): ReactElement => {
              if (formErrors[fieldName].length > 0) {
                return <p key={i}>{formErrors[fieldName]}</p>;
              } else {
                return <Fragment key={i} />;
              }
            },
          )}
      </div>
      {inputs.map((item: ReactElement): ReactElement => item)}
      <div className={`form-custom__submit`}>
        <button
          className={`form-custom__btn`}
          type="submit"
          disabled={!formValid}
        >
          {titel}
        </button>
      </div>
    </form>
  );
};

export { FormCustom };

const wrapper = compose(withFormState);

export default wrapper(FormCustom) as ComponentClass<PropsInsert>;
