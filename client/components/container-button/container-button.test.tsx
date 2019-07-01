import * as Enzyme from "enzyme";
import { shallow } from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import toJson, { Json } from "enzyme-to-json";
import * as React from "react";
import ContainerButton from "./container-button";

Enzyme.configure({ adapter: new Adapter() });
it(`ContainerButton correctly render`, (): void => {
  const jestFunc = jest.fn();
  const tree: Json = toJson(
    shallow(<ContainerButton onButtonCLick={jestFunc} />),
  );
  expect(tree).toMatchSnapshot();
});
