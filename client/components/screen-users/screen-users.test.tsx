import * as Enzyme from "enzyme";
import { shallow } from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import toJson, { Json } from "enzyme-to-json";
import * as React from "react";
import { users } from "../../mock/constant-mock";
import { ScreenUsers } from "./screen-users";

Enzyme.configure({ adapter: new Adapter() });
it(`ScreenUsers correctly render without data`, (): void => {
  const jestFunc = jest.fn();
  const tree: Json = toJson(
    shallow(<ScreenUsers users={[]} onUsersLoad={jestFunc} />),
  );
  expect(tree).toMatchSnapshot();
});
it(`ScreenUsers correctly render with data`, (): void => {
  const jestFunc = jest.fn();
  const tree: Json = toJson(
    shallow(<ScreenUsers users={users} onUsersLoad={jestFunc} />),
  );
  expect(tree).toMatchSnapshot();
});
