import withAuthorizationState from "@client/hocs/with-authorization-state/with-authorization-state";
import * as React from "react";
import { FunctionComponent, ReactElement } from "react";
import Footer from "../footer/footer";
import Header from "../header/header";
import SignUp from "../sign-up/sign-up";
const SignUpState = withAuthorizationState(SignUp, true);

const PageSignUp: FunctionComponent = (): ReactElement => {
  return (
    <div className={`page`}>
      <Header />
      <main className={`page-content`}>
        <section className={`sign-up-box`}>
          <SignUpState />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PageSignUp;
