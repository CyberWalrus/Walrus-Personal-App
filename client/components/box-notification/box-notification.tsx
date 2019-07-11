import RoutePath from "@client/routes";
import * as React from "react";
import { FunctionComponent, ReactElement } from "react";

interface Props {
  message: string;
  type: string;
}
const BoxNotification: FunctionComponent<Props> = ({message, type}: Props): ReactElement => {
  return (
    <section>
      <article>
        {message}
      </article>
    </section>
  );
};

export default BoxNotification;
