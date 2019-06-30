import * as Enzyme from "enzyme";
import { shallow } from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import toJson, { Json } from "enzyme-to-json";
import * as React from "react";
import { users, usersEmpty } from "../../mock/constant-mock";
import { PageInfo } from "./page-info";

Enzyme.configure({ adapter: new Adapter() });
it(`PageInfo correctly render without data`, (): void => {
  const jestFunc = jest.fn();
  const tree: Json = toJson(
    shallow(<PageInfo onUserLoad={jestFunc} users={usersEmpty} />),
  );
  expect(tree).toMatchSnapshot();
});
it(`PageInfo correctly render with data`, (): void => {
  const jestFunc = jest.fn();
  const tree: Json = toJson(
    shallow(<PageInfo onUserLoad={jestFunc} users={users} />),
  );
  expect(tree).toMatchSnapshot();
});
