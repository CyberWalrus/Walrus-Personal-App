import { InputCustomOptions as options } from "@config/constants";
import * as React from "react";
import { Fragment, FunctionComponent, ReactElement } from "react";
import InputCustom from "../input-custom/input-custom";

interface PropsInsert {
  titel: string;
}
interface PropsHoc {
  email: string;
  password: string;
  formErrors: object;
  formValid: boolean;
  onChangeUserInput: () => void;
  onClickSubmit: () => void;
}
type Props = PropsHoc & PropsInsert;
const FormCustom: FunctionComponent<Props> = ({
  email,
  password,
  formErrors,
  formValid,
  onChangeUserInput,
  onClickSubmit,
  titel,
}: Props): ReactElement => {
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
      <InputCustom
        option={options.email}
        value={email}
        onChangeInput={onChangeUserInput}
      />
      <InputCustom
        option={options.password}
        value={password}
        onChangeInput={onChangeUserInput}
      />
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

export default FormCustom;
