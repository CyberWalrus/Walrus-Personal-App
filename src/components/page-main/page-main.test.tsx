import * as Enzyme from "enzyme";
import { shallow } from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";
import * as React from "react";
import PageMain from "./page-main";

Enzyme.configure({adapter: new Adapter()});
it(`PageMain correctly render`, (): void => {
  const tree = toJson(shallow(<PageMain />));
  expect(tree).toMatchSnapshot();
});
