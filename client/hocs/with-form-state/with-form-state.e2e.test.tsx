import * as Enzyme from "enzyme";
import { mount } from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import * as React from "react";
import { FORM_TYPE } from "../../mock/constant-mock";
import { withFormState } from "./with-form-state";

Enzyme.configure({ adapter: new Adapter() });

const WithFormState = withFormState((): React.ReactElement => <div />);

describe(`<withDataState/>`, (): void => {
  const jestFunc = jest.fn();
  it(`Should default state`, (): void => {
    const tree = mount(
      <WithFormState
        formType={FORM_TYPE}
        errorMessage={``}
        success={false}
        onSignIn={jestFunc}
        onSignUp={jestFunc}
        onAddUserRole={jestFunc}
        onResetError={jestFunc}
      />,
    );
    expect(tree.state(`name`)).toEqual(``);
    expect(tree.state(`login`)).toEqual(``);
    expect(tree.state(`password`)).toEqual(``);
    expect(tree.state(`passwordConfirm`)).toEqual(``);
    expect(tree.state(`formErrors`)).toEqual({
      email: ``,
      password: ``,
      signIn: ``,
      login: ``,
      passwordConfirm: ``,
    });
    expect(tree.state(`emailValid`)).toEqual(true);
    expect(tree.state(`passwordValid`)).toEqual(true);
    expect(tree.state(`loginValid`)).toEqual(true);
    expect(tree.state(`passwordConfirmValid`)).toEqual(true);
    expect(tree.state(`formValid`)).toEqual(false);
  });
});
