import * as Enzyme from "enzyme";
import { shallow } from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import toJson, { Json } from "enzyme-to-json";
import * as React from "react";
import PageSignUp from "./page-sign-up";

Enzyme.configure({ adapter: new Adapter() });
it(`PageSignUp correctly render`, (): void => {
  const tree: Json = toJson(shallow(<PageSignUp />));
  expect(tree).toMatchSnapshot();
});
