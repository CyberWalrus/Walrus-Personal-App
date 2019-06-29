import withFormState, {
  Option,
} from "@client/hocs/with-form-state/with-form-state";
import { InputCustomInterface } from "@client/type/component";
import { FormType, inputCustomOptions } from "@config/constants";
import * as React from "react";
import { ComponentClass, Fragment, FunctionComponent, ReactElement } from "react";
import { compose } from "redux";
import InputCustom from "../input-custom/input-custom";

interface PropsInsert {
  titel: string;
  formType: FormType;
}
export interface PropsHoc {
  options: Option;
}

type Props = PropsHoc & PropsInsert;

const FormCustom: FunctionComponent<Props> = ({
  titel,
  options,
  formType,
}: Props): ReactElement => {
  const {
    values,
    formErrors,
    formValid,
    onChangeUserInput,
    onClickSubmit,
  }: Option = options;
  const inputs: ReactElement[] = [];
  inputCustomOptions.map((item: InputCustomInterface, index: number): void => {
    if (item.formTypes.includes(formType)) {
      const indexValue = Object.keys(values).indexOf(item.name);
      inputs.push(
        <InputCustom
          key={index}
          option={item}
          value={values[indexValue]}
          onChangeInput={onChangeUserInput}
        />,
      );
    }
  });
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

const wrapper = compose<PropsHoc, {}>(withFormState);

export default wrapper(FormCustom) as ComponentClass<PropsInsert>;
