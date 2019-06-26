import withDataState from "@client/hocs/with-data-state/with-data-state";
import { UserRole } from "@client/type/data";
import { FormType } from "@config/constants";
import { FunctionComponent, ReactElement } from "react";
import * as React from "react";
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import { compose } from "recompose";
import Footer from "../footer/footer";
import FormCustom from "../form-custom/form-custom";
import Header from "../header/header";

export interface PropsHoc {
  userRoles: UserRole[];
  onSortEnd: () => void;
}
type Props = PropsHoc;

const SortableItem = SortableElement(
  ({name, id, isActive}: UserRole): ReactElement => (
    <div className={`data-container`}>
      <div>{name}</div>
      <div>{id}</div>
      <div>
        <input type={`checkbox`} defaultChecked={isActive} />
      </div>
    </div>
  ),
);
interface PropsSortableList {
  items: UserRole[];
}
const SortableList = SortableContainer(({items}: PropsSortableList) => {
  return (
    <fieldset className={`data-box`}>
      {items.map(({name, id, isActive}: UserRole, index: number) => (
        <SortableItem
          key={`item-${index.toString()}`}
          index={index}
          name={name}
          id={id}
          isActive={isActive}
        />
      ))}
    </fieldset>
  );
});

const PageOptions: FunctionComponent<Props> = ({
  userRoles,
  onSortEnd,
}: Props): ReactElement => {
  return (
    <div className={`page`}>
      <Header />
      <main className={`page-content`}>
        <section>
          <h2>Options</h2>
          <SortableList items={userRoles} onSortEnd={onSortEnd} />
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
