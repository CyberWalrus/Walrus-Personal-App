import withFormState from "@client/hocs/with-form-state/with-form-state";
import { FormType } from "@config/constants";
import * as React from "react";
import { FunctionComponent, ReactElement } from "react";
import FormCustom from "../form-custom/form-custom";

const PageSignUp: FunctionComponent = (): ReactElement => {
  return (
      <main className={`page-content`}>
        <section className={`form-custom-box`}>
          <FormCustom formType={FormType.SIGN_UP} titel={`Sign Up`} />
        </section>
      </main>
  );
};

export default PageSignUp;
