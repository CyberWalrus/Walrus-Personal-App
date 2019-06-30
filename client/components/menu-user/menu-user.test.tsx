import * as Enzyme from "enzyme";
import { shallow } from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import toJson, { Json } from "enzyme-to-json";
import * as React from "react";
import { user } from "../../mock/constant-mock";
import { MenuUser } from "./menu-user";

Enzyme.configure({ adapter: new Adapter() });
it(`MenuUser correctly render without data`, (): void => {
  const jestFunc = jest.fn();
  const tree: Json = toJson(
    shallow(
      <MenuUser
        isOpen={true}
        isAuthorization={false}
        user={undefined}
        onClickMenu={jestFunc}
        onLogout={jestFunc}
        onButtonCLick={jestFunc}
      />,
    ),
  );
  expect(tree).toMatchSnapshot();
});
it(`MenuUser correctly render with data`, (): void => {
  const jestFunc = jest.fn();
  const tree: Json = toJson(
    shallow(
      <MenuUser
        isOpen={true}
        isAuthorization={false}
        user={user}
        onClickMenu={jestFunc}
        onLogout={jestFunc}
        onButtonCLick={jestFunc}
      />,
    ),
  );
  expect(tree).toMatchSnapshot();
});
