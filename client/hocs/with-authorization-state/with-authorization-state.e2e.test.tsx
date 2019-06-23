import * as Enzyme from "enzyme";
import { mount } from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import * as React from "react";
import { withAuthorizationState } from "./with-authorization-state";

Enzyme.configure({adapter: new Adapter()});

const WithAuthorizationState = withAuthorizationState(
  (): React.ReactElement => <div />,
);

describe(`<WithAuthorizationState/>`, (): void => {
  it(`Should default state`, (): void => {
    const handleClick = jest.fn();
    const tree = mount(
      <WithAuthorizationState
        errorMessage={``}
        onSignIn={handleClick}
        onResetError={handleClick}
      />,
    );
    expect(tree.state(`email`)).toEqual(``);
    expect(tree.state(`password`)).toEqual(``);
    expect(tree.state(`formErrors`)).toEqual({
      email: ``,
      password: ``,
      signIn: ``,
    });
    expect(tree.state(`emailValid`)).toEqual(false);
    expect(tree.state(`passwordValid`)).toEqual(true);
    expect(tree.state(`formValid`)).toEqual(false);
  });
});
