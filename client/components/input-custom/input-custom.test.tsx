import * as Enzyme from "enzyme";
import { shallow } from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import toJson, { Json } from "enzyme-to-json";
import * as React from "react";
import { optionForm, optionInput } from "../../mock/constant-mock";
import InputCustom from "./input-custom";

Enzyme.configure({ adapter: new Adapter() });

it(`InputCustom correctly render`, (): void => {
  const tree: Json = toJson(
    shallow(
      <InputCustom
        value={``}
        onChangeInput={optionForm.onChangeUserInput}
        option={optionInput}
      />,
    ),
  );
  expect(tree).toMatchSnapshot();
});
