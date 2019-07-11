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
import BoxNotification from "../box-notification/box-notification";
import MenuLink from "../menu-link/menu-link";

const Header = React.forwardRef(
  ({  }: {}, ref: RefObject<HTMLDivElement>): ReactElement => {
    return (
      <header className={`header-box`} ref={ref}>
        <div className={`header-box__back`}>
          <Link to={RoutePath.INDEX} className={`header-box__link`}>
            {`l`}
          </Link>
        </div>
        <div className={`logo`}>
          <Link to={RoutePath.INDEX} className={`logo__link`}>
            <img
              inline-size={`5rem`}
              block-size={`5rem`}
              className={`logo__img`}
              src={`img/walrus-icon-white.png`}
              alt={`walrus logo`}
            />
          </Link>
        </div>
        <div className={`page-header__menu`}>
          <MenuLink />
        </div>
        <div className={`notification-container`}>
          <BoxNotification />
        </div>
      </header>
    );
  },
);

export { Header };

export default withScrollState(Header) as ComponentClass;
