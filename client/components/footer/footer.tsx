import RoutePath from "@client/routes";
import * as React from "react";
import { FunctionComponent, ReactElement } from "react";
import { Link } from "react-router-dom";

const Footer: FunctionComponent = (): ReactElement => {
  return (
    <footer className={`page-footer`}>
      <div className={`logo logo_footer`}>
        <Link to={RoutePath.INDEX} className={`logo__link`}>
          <img className={`logo__img`} src={`img/walrus-icon-white.png`} />
        </Link>
      </div>
      <div className={`copyright`}>
        <p>© 2019 Walrus Personal App</p>
      </div>
    </footer>
  );
};

export default Footer;
