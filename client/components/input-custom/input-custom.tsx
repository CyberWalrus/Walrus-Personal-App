import { InputCustomInterface } from "@client/type/component";
import * as React from "react";
import { Fragment, FunctionComponent, ReactElement } from "react";

interface PropsInsert {
  option: InputCustomInterface;
}
interface PropsHoc {
  value: string;
  onChangeInput: () => void;
}
type Props = PropsHoc & PropsInsert;
const InputCustom: FunctionComponent<Props> = ({
  value,
  onChangeInput,
  option,
}: Props): ReactElement => {
  return (
    <div className={`form-custom__field`}>
      <input
        className={`form-custom__input`}
        type={option.type}
        placeholder={option.placeHolder}
        name={option.name}
        id={`custom-${option.name}`}
        value={value}
        onChange={onChangeInput}
      />
      <label
        className={`form-custom__label visually-hidden`}
        htmlFor={`custom-${name}`}
      >
        {option.hidenValue}
      </label>
    </div>
  );
};

export default InputCustom;
