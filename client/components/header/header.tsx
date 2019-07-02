import withScrollState from "@client/hocs/with-scroll-state/with-scroll-state";
import RoutePath from "@client/routes";
import * as React from "react";
import {
  ComponentClass,
  FunctionComponent,
  ReactElement,
  RefObject,
} from "react";
import { Link } from "react-router-dom";
import MenuLink from "../menu-link/menu-link";

const Header = React.forwardRef(
  ({  }: {}, ref: RefObject<HTMLDivElement>): ReactElement => {
    return (
      <header className={`page-header`} ref={ref}>
        <div className={`back`}>
          <Link to={RoutePath.INDEX} className={`back__link`}>
            {`l`}
          </Link>
        </div>
        <div className={`logo`}>
          <Link to={RoutePath.INDEX} className={`logo__link`}>
            <img
              width={`5rem`}
              height={`5rem`}
              className={`logo__img`}
              src={`img/walrus-icon-white.png`}
              alt={`walrus logo`}
            />
          </Link>
        </div>
        <div className={`page-header__menu`}>
          <MenuLink />
        </div>
      </header>
    );
  },
);

export { Header };

export default withScrollState(Header) as ComponentClass;
