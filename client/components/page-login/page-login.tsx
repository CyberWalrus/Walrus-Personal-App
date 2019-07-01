import { FormType } from "@config/constants";
import * as React from "react";
import { FunctionComponent, ReactElement } from "react";
import FormCustom from "../form-custom/form-custom";

const PageLogIn: FunctionComponent = (): ReactElement => {
  return (
    <main className={`page-content`}>
      <section className={`form-custom-box`}>
        <FormCustom formType={FormType.SIGN_IN} titel={`Sign In`} />
      </section>
    </main>
  );
};

export default PageLogIn;
