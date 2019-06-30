import * as Enzyme from "enzyme";
import { mount } from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import * as React from "react";
import { user } from "../../mock/constant-mock";
import { withUserMenuState } from "./with-user-menu-state";

Enzyme.configure({ adapter: new Adapter() });

const WithUserMenuState = withUserMenuState((): React.ReactElement => <div />);

describe(`<withUserMenuState/>`, (): void => {
  const jestFunc = jest.fn();
  it(`Should default state`, (): void => {
    const tree = mount(
      <WithUserMenuState
        user={user}
        isAuthorization={true}
        onLogout={jestFunc}
      />,
    );
    expect(tree.state(`isOpen`)).toEqual(false);
  });
});
