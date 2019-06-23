import withAuthorizationState from "@client/hocs/with-authorization-state/with-authorization-state";
import * as React from "react";
import { FunctionComponent, ReactElement } from "react";
import Footer from "../footer/footer";
import Header from "../header/header";
import SignIn from "../sign-in/sign-in";
const SignInState = withAuthorizationState(SignIn);

const PageMain: FunctionComponent = (): ReactElement => {
  return (
    <div className={`page`}>
      <Header />
      <main className={`page-content`}>
        <section className={`sign-in-box`}>
          <SignInState />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PageMain;
