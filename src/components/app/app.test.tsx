import * as Enzyme from "enzyme";
import { shallow } from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";
import * as React from "react";
import App from "./app";

Enzyme.configure({adapter: new Adapter()});
it(`App correctly render`, (): void => {
  const tree = toJson(shallow(<App />));
  expect(tree).toMatchSnapshot();
});
