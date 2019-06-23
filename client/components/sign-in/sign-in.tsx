import * as React from "react";
import { Fragment, FunctionComponent, ReactElement } from "react";

interface Props {
  email: string;
  password: string;
  formErrors: object;
  formValid: boolean;
  onChangeUserInput: () => void;
  onClickSubmit: () => void;
}
const SignIn: FunctionComponent<Props> = ({
  email,
  password,
  formErrors,
  formValid,
  onChangeUserInput,
  onClickSubmit,
}: Props): ReactElement => {
  return (
    <form onSubmit={onClickSubmit} className="sign-in__form">
      <div className="sign-in__message">
        {formErrors &&
          Object.keys(formErrors).map(
            (fieldName: string, i: number): ReactElement => {
              if (formErrors[fieldName].length > 0) {
                return <p key={i}>{formErrors[fieldName]}</p>;
              } else {
                return <Fragment key={i} />;
              }
            },
          )}
      </div>
      <div className="sign-in__fields">
        <div className="sign-in__field">
          <input
            className="sign-in__input"
            type="email"
            placeholder="Email address"
            name="email"
            id="user-email"
            value={email}
            onChange={onChangeUserInput}
          />
          <label
            className="sign-in__label visually-hidden"
            htmlFor="user-email"
          >
            Email address
          </label>
        </div>
        <div className="sign-in__field">
          <input
            className="sign-in__input"
            type="password"
            placeholder="Password"
            name="password"
            id="user-password"
            value={password}
            onChange={onChangeUserInput}
          />
          <label
            className="sign-in__label visually-hidden"
            htmlFor="user-password"
          >
            Password
          </label>
        </div>
      </div>
      <div className="sign-in__submit">
        <button
          className="sign-in__btn sign-in__btn--disavled"
          type="submit"
          disabled={!formValid}
        >
          Sign in
        </button>
      </div>
    </form>
  );
};

export default SignIn;
