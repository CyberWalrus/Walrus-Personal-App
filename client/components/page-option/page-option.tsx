import withDataState from "@client/hocs/with-data-state/with-data-state";
import { UserRole } from "@client/type/data";
import { FormType } from "@config/constants";
import { FunctionComponent, ReactElement } from "react";
import * as React from "react";
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import { compose } from "recompose";
import FormCustom from "../form-custom/form-custom";

export interface PropsHoc {
  userRoles: UserRole[];
  onSortEnd: () => void;
  onDelete: (id: string) => void;
}
type Props = PropsHoc;
interface Delete {
  onDelete: () => void;
}
interface DeleteId {
  onDelete: (id: string) => void;
}
interface PropsSortableList {
  items: UserRole[];
}

const SortableItem = SortableElement(
  ({ name, id, isActive, onDelete }: UserRole & Delete): ReactElement => (
    <div className={`data-container`}>
      <div>{name}</div>
      <div>{id}</div>
      <div>
        <input type={`checkbox`} defaultChecked={isActive} />
      </div>
      <div>
        <button onClick={onDelete} />
      </div>
    </div>
  ),
);
const SortableList = SortableContainer(
  ({ items, onDelete }: PropsSortableList & DeleteId) => {
    return (
      <fieldset className={`data-box`}>
        {items.map(({ name, id, isActive }: UserRole, index: number) => {
          const deleteFunc = (): void => onDelete(id);
          return (
            <SortableItem
              key={`item-${index.toString()}`}
              index={index}
              name={name}
              id={id}
              isActive={isActive}
              onDelete={deleteFunc}
            />
          );
        })}
      </fieldset>
    );
  },
);

const PageOptions: FunctionComponent<Props> = ({
  userRoles,
  onSortEnd,
  onDelete,
}: Props): ReactElement => {
  return (
    <main className={`page-content`}>
      <section>
        <h2>Options</h2>
        <SortableList
          items={userRoles}
          onSortEnd={onSortEnd}
          onDelete={onDelete}
        />
      </section>
      <section className={``}>
        <FormCustom formType={FormType.USER_ROLE} titel={`Add User Role`} />
      </section>
    </main>
  );
};

export { PageOptions };

const wrapper = compose<any, Props>(withDataState);

export default wrapper(PageOptions);
