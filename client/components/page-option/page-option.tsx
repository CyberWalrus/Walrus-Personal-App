import withDataState from "@client/hocs/with-data-state/with-data-state";
import { UserRole } from "@client/type/data";
import { FormType } from "@config/constants";
import * as React from "react";
import { FunctionComponent, ReactElement } from "react";
import { compose } from "recompose";
import Footer from "../footer/footer";
import FormCustom from "../form-custom/form-custom";
import Header from "../header/header";

interface PropsHoc {
  userRoles: UserRole[];
}
type Props = PropsHoc;

const PageOptions: FunctionComponent<Props> = ({
  userRoles,
}: Props): ReactElement => {
  return (
    <div className={`page`}>
      <Header />
      <main className={`page-content`}>
        <section>
          <h2>Options</h2>
          <article>
            {userRoles &&
              userRoles.map((item: UserRole, index: number) => (
                <p key={index}>
                  {item.name} {item.id}
                </p>
              ))}
          </article>
        </section>
        <section className={`form-custom-box`}>
          <FormCustom formType={FormType.USER_ROLE} titel={`Add User Role`} />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export { PageOptions };

const wrapper = compose(withDataState);

export default wrapper(PageOptions);
