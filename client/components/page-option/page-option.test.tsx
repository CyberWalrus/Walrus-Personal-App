import * as Enzyme from "enzyme";
import { shallow } from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import toJson, { Json } from "enzyme-to-json";
import * as React from "react";
import { userRoles, userRolesEmpty } from "../../mock/constant-mock";
import { PageOptions } from "./page-option";

Enzyme.configure({ adapter: new Adapter() });
it(`PageOptions correctly render without data`, (): void => {
  const jestFunc = jest.fn();
  const tree: Json = toJson(
    shallow(
      <PageOptions
        userRoles={userRolesEmpty}
        onSortEnd={jestFunc}
        onDelete={jestFunc}
      />,
    ),
  );
  expect(tree).toMatchSnapshot();
});
it(`PageOptions correctly render with data`, (): void => {
  const jestFunc = jest.fn();
  const tree: Json = toJson(
    shallow(
      <PageOptions
        userRoles={userRoles}
        onSortEnd={jestFunc}
        onDelete={jestFunc}
      />,
    ),
  );
  expect(tree).toMatchSnapshot();
});
