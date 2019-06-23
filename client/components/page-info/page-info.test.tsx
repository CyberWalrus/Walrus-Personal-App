import * as Enzyme from "enzyme";
import { shallow } from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import toJson, { Json } from "enzyme-to-json";
import * as React from "react";
import PageInfo from "./page-info";

Enzyme.configure({adapter: new Adapter()});
it(`PageInfo correctly render`, (): void => {
  const tree: Json = toJson(shallow(<PageInfo />));
  expect(tree).toMatchSnapshot();
});
