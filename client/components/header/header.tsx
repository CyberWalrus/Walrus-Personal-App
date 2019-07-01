import RoutePath from "@client/routes";
import * as React from "react";
import { FunctionComponent, ReactElement } from "react";
import { Link } from "react-router-dom";
import MenuUser from "../menu-user/menu-user";

const Header: FunctionComponent = (): ReactElement => {
  return (
    <header className={`page-header`}>
      <div className={`logo`}>
        <Link to={RoutePath.INDEX} className={`logo__link`}>
          <img className={`logo__img`} src={`img/walrus-icon-white.png`} />
        </Link>
      </div>
      <nav className={`menu`}>
        <ul className={`menu__ul`}>
          <li className={`menu__item menu__item_active`}>
            <Link to={RoutePath.INDEX} className={`menu__link`}>
              Main
            </Link>
            <span className={`menu__line`} />
          </li>
          <li className={`menu__item`}>
            <Link to={RoutePath.INFO} className={`menu__link`}>
              Info
            </Link>
          </li>
          <li className={`menu__item`}>
            <Link to={RoutePath.OPTION} className={`menu__link`}>
              Option
            </Link>
          </li>
        </ul>
      </nav>
      <div className={`user`}>
        <MenuUser />
      </div>
    </header>
  );
};

export default Header;
