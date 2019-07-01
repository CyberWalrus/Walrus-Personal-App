import * as Enzyme from "enzyme";
import { shallow } from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import toJson, { Json } from "enzyme-to-json";
import * as React from "react";
import PageUser from "./page-user";

Enzyme.configure({ adapter: new Adapter() });
it(`PageUser correctly render`, (): void => {
  const tree: Json = toJson(shallow(<PageUser />));
  expect(tree).toMatchSnapshot();
});
