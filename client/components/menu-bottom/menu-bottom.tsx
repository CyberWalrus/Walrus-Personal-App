import RoutePath from "@client/routes";
import * as React from "react";
import { FunctionComponent, ReactElement } from "react";
import { Link } from "react-router-dom";
import MenuUser from "../menu-user/menu-user";

const MenuBottom: FunctionComponent = (): ReactElement => {
  return (
    <section className={`menu-bottom-container`}>
      <nav className={`menu-bottom`}>
        <ul className={`menu-bottom__list`}>
          <li className={`menu-bottom__item`}>
            <Link to={RoutePath.INDEX} className={`menu-bottom__link`}>
              {`H`}
            </Link>
          </li>
          <li className={`menu-bottom__item`}>
            <Link to={RoutePath.INFO} className={`menu-bottom__link`}>
              {`i`}
            </Link>
          </li>
          <li className={`menu-bottom__item`}>
            <Link to={RoutePath.OPTION} className={`menu-bottom__circle`}>
              {`P`}
            </Link>
          </li>
          <li className={`menu-bottom__item`}>
            <Link to={RoutePath.USER} className={`menu-bottom__link`}>
              {`Q`}
            </Link>
          </li>
          <li className={`menu-bottom__item`}>
            <Link to={RoutePath.USER} className={`menu-bottom__link`}>
              {`s`}
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default MenuBottom;
