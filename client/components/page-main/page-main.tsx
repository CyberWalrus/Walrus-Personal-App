import RoutePath from "@client/routes";
import * as React from "react";
import { FunctionComponent, ReactElement } from "react";
import { Link } from "react-router-dom";

const PageMain: FunctionComponent = (): ReactElement => {
  return (
    <div>
      <header>
        <div className="logo-header">
          <Link to={RoutePath.INDEX}>
            <img src="img/walrus-icon-white.png" />
          </Link>
        </div>
        <nav className="menu-header">
          <ul>
            <li>
              <Link to={RoutePath.INDEX}>Main</Link>
            </li>
            <li>
              <Link to={RoutePath.LOGIN}>Login</Link>
            </li>
          </ul>
        </nav>
        <div className="user-header">
          <div className="user-header__avatar">
            Sign In
          </div>
        </div>
      </header>
      <main>
        <div />
      </main>
      <footer>
        <div />
      </footer>
    </div>
  );
};

export default PageMain;
