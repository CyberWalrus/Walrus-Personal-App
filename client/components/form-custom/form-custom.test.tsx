import * as Enzyme from "enzyme";
import { shallow } from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import toJson, { Json } from "enzyme-to-json";
import * as React from "react";
import { FORM_TYPE, optionForm } from "../../mock/constant-mock";
import { FormCustom } from "./form-custom";

Enzyme.configure({ adapter: new Adapter() });

it(`FormCustom correctly render`, (): void => {
  const tree: Json = toJson(
    shallow(
      <FormCustom options={optionForm} formType={FORM_TYPE} titel={`test`} />,
    ),
  );
  expect(tree).toMatchSnapshot();
});
