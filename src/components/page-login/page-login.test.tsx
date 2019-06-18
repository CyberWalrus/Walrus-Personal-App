import * as Enzyme from "enzyme";
import { shallow } from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";
import * as React from "react";
import PageLogin from "./page-login";

Enzyme.configure({adapter: new Adapter()});
it(`PageLogin correctly render`, (): void => {
  const tree = toJson(shallow(<PageLogin />));
  expect(tree).toMatchSnapshot();
});
