import * as Enzyme from "enzyme";
import { shallow } from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import toJson, { Json } from "enzyme-to-json";
import * as React from "react";
import { user } from "../../mock/constant-mock";
import { ScreenUser } from "./screen-user";

Enzyme.configure({ adapter: new Adapter() });
it(`ScreenUser correctly render without data`, (): void => {
  const jestFunc = jest.fn();
  const tree: Json = toJson(
    shallow(<ScreenUser onUserLoad={jestFunc} user={undefined} id={`test`} />),
  );
  expect(tree).toMatchSnapshot();
});

it(`ScreenUser correctly render without data`, (): void => {
  const jestFunc = jest.fn();
  const tree: Json = toJson(
    shallow(<ScreenUser onUserLoad={jestFunc} user={user} id={user.id} />),
  );
  expect(tree).toMatchSnapshot();
});
