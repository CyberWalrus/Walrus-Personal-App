import withNotificationState from "@client/hocs/with-notification-state/with-notification-state";
import { PropsNotification } from "@client/type/hocs";
import * as React from "react";
import { ComponentClass, FunctionComponent, ReactElement } from "react";
import { compose } from "recompose";

type Props = PropsNotification;
const BoxNotification: FunctionComponent<Props> = ({
  message,
  type,
}: Props): ReactElement => {
  return (
    <section className={`notification`}>
      <article>{message}</article>
    </section>
  );
};

export { BoxNotification };

const wrapper = compose<any, Props>(withNotificationState);
export default wrapper(BoxNotification) as ComponentClass<{}>;
