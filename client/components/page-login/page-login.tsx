import { FormType } from "@config/constants";
import * as React from "react";
import { FunctionComponent, ReactElement } from "react";
import Footer from "../footer/footer";
import FormCustom from "../form-custom/form-custom";
import Header from "../header/header";

const PageLogIn: FunctionComponent = (): ReactElement => {
  return (
    <div className={`page`}>
      <Header />
      <main className={`page-content`}>
        <section className={`form-custom-box`}>
          <FormCustom formType={FormType.SIGN_IN} titel={`Sign In`} />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PageLogIn;
