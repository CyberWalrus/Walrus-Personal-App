import * as React from "react";
import { Fragment, FunctionComponent, ReactElement } from "react";

interface Props {
  email: string;
  password: string;
  passwordConfirm: string;
  login: string;
  formErrors: object;
  formValid: boolean;
  onChangeUserInput: () => void;
  onClickSubmit: () => void;
}
const SignUp: FunctionComponent<Props> = ({
  email,
  password,
  passwordConfirm,
  login,
  formErrors,
  formValid,
  onChangeUserInput,
  onClickSubmit,
}: Props): ReactElement => {
  return (
    <form onSubmit={onClickSubmit} className={`sign-up`}>
      <div className={`sign-up__titel`}>
        <h2>Sign In</h2>
      </div>
      <div className={`sign-up__message`}>
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
      <div className={`sign-up__field`}>
        <input
          className={`sign-up__input`}
          type="text"
          placeholder="Login"
          name="login"
          id="sign-up-login"
          value={login}
          onChange={onChangeUserInput}
        />
        <label
          className={`sign-up__label visually-hidden`}
          htmlFor="sign-up-login"
        >
          Login
        </label>
      </div>
      <div className={`sign-up__field`}>
        <input
          className={`sign-up__input`}
          type="email"
          placeholder="Email address"
          name="email"
          id="sign-up-email"
          value={email}
          onChange={onChangeUserInput}
        />
        <label
          className={`sign-up__label visually-hidden`}
          htmlFor="sign-up-email"
        >
          Email address
        </label>
      </div>
      <div className={`sign-up__field`}>
        <input
          className={`sign-up__input`}
          type="password"
          placeholder="Password"
          name="password"
          id="sign-up-password"
          value={password}
          onChange={onChangeUserInput}
        />
        <label
          className={`sign-up__label visually-hidden`}
          htmlFor="sign-up-password"
        >
          Password
        </label>
      </div>
      <div className={`sign-up__field`}>
        <input
          className={`sign-up__input`}
          type="password"
          placeholder="Confirm Password"
          name="passwordConfirm"
          id="sign-up-passwordConfirm"
          value={passwordConfirm}
          onChange={onChangeUserInput}
        />
        <label
          className={`sign-up__label visually-hidden`}
          htmlFor="sign-up-passwordConfirm"
        >
          Confirm Password
        </label>
      </div>
      <div className={`sign-up__submit`}>
        <button
          className={`sign-up__btn sign-in__btn--disavled`}
          type="submit"
          disabled={!formValid}
        >
          Sign Up
        </button>
      </div>
    </form>
  );
};

export default SignUp;
