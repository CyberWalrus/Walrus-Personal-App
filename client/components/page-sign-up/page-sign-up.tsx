import withAuthorizationState from "@client/hocs/with-authorization-state/with-authorization-state";
import { FormType } from "@config/constants";
import * as React from "react";
import { FunctionComponent, ReactElement } from "react";
import Footer from "../footer/footer";
import FormCustom from "../form-custom/form-custom";
import Header from "../header/header";

const PageSignUp: FunctionComponent = (): ReactElement => {
  return (
    <div className={`page`}>
      <Header />
      <main className={`page-content`}>
        <section className={`form-custom-box`}>
          <FormCustom formType={FormType.SIGN_UP} titel={`Sign Up`} />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PageSignUp;
