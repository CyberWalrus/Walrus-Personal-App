import RoutePath from "@client/routes";
import * as React from "react";
import { FunctionComponent, ReactElement } from "react";
import { Link } from "react-router-dom";

const PageLogin: FunctionComponent = (): ReactElement => {
  return (
    <div>
      Hello Walrus!! <br />
      <Link to={RoutePath.INDEX}>Main</Link>
    </div>
  );
};

export default PageLogin;
