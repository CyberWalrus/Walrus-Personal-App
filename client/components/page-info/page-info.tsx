import RoutePath from "@client/routes";
import * as React from "react";
import { FunctionComponent, ReactElement } from "react";
import { Link } from "react-router-dom";

const PageInfo: FunctionComponent = (): ReactElement => {
  return (
    <div>
      Info<br />
      <Link to={RoutePath.INDEX}>Main</Link>
    </div>
  );
};

export default PageInfo;
