import * as Enzyme from "enzyme";
import { mount } from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import * as React from "react";
import { userRoles } from "../../mock/constant-mock";
import { withDataState } from "./with-data-state";

Enzyme.configure({ adapter: new Adapter() });

const WithDataState = withDataState((): React.ReactElement => <div />);

describe(`<withDataState/>`, (): void => {
  const jestFunc = jest.fn();
  it(`Should default state`, (): void => {
    const tree = mount(
      <WithDataState
        userRoles={userRoles}
        onUserRoleLoad={jestFunc}
        onAddUserRole={jestFunc}
        onDeleteUserRole={jestFunc}
      />,
    );
    expect(tree.state(`userRoles`)).toEqual(userRoles);
  });
});
