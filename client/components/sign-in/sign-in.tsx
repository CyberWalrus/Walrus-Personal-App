import * as React from "react";
import { FunctionComponent, ReactElement } from "react";

const SignIn: FunctionComponent = (): ReactElement => {
  return (
    <form>
      <input type="email" />
      <input type="password" />
      <button type="submit"/>
    </form>
  );
};

export default SignIn;
