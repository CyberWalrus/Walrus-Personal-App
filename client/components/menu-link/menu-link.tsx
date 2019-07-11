import withUserMenuState from "@client/hocs/with-user-menu-state/with-user-menu-state";
import RoutePath from "@client/routes";
import { User } from "@client/type/data";
import * as React from "react";
import { ComponentClass, FunctionComponent, ReactElement } from "react";
import { Link } from "react-router-dom";
import { compose } from "recompose";

export interface PropsHoc {
  isOpen: boolean;
  isAuthorization: boolean;
  user: User;
  onClickMenu: () => void;
}
type Props = PropsHoc;
const MenuUser: FunctionComponent<Props> = ({
  isOpen,
  isAuthorization,
  user,
  onClickMenu,
}: Props): ReactElement => {
  return (
    <div className={`button-box`}>
      <button
        onClick={onClickMenu}
        className={
          isOpen ? `button-box__btn button-box__btn_active` : `button-box__btn`
        }
      >
        {`L`}
      </button>
      <div
        className={!isOpen ? `shadow-box` : `shadow-box shadow-box_visible`}
        onClick={onClickMenu}
      />
      <div className={!isOpen ? `menu-link` : `menu-link menu-link_open`}>
        <div className={`menu-link__box`}>
          <nav className={`menu-link__nav`}>
            <ul className={`menu-link__list`}>
              <li className={`menu-link__item`}>
                <Link
                  to={RoutePath.INDEX}
                  className={`menu-link__link`}
                  onClick={onClickMenu}
                >
                  <div className={`icon`}>{`N`}</div>
                  <div className={`bold-text`}>Home</div>
                </Link>
              </li>
              <li className={`menu-link__item`}>
                <Link
                  to={RoutePath.INFO}
                  className={`menu-link__link`}
                  onClick={onClickMenu}
                >
                  <div className={`icon`}>{`N`}</div>
                  <div className={`bold-text`}>Info</div>
                </Link>
              </li>
              <li className={`menu-link__item`}>
                <Link
                  to={RoutePath.USER}
                  className={`menu-link__link`}
                  onClick={onClickMenu}
                >
                  <div className={`icon`}>{`N`}</div>
                  <div className={`bold-text`}>Users</div>
                </Link>
              </li>
              <li className={`menu-link__item`}>
                <Link
                  to={RoutePath.OPTION}
                  className={`menu-link__link`}
                  onClick={onClickMenu}
                >
                  <div className={`icon`}>{`N`}</div>
                  <div className={`bold-text`}>Option</div>
                </Link>
              </li>
              <li className={`menu-link__item`}>
                <Link
                  to={RoutePath.TIME}
                  className={`menu-link__link`}
                  onClick={onClickMenu}
                >
                  <div className={`icon`}>{`N`}</div>
                  <div className={`bold-text`}>Time</div>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export { MenuUser };

const wrapper = compose<PropsHoc, {}>(withUserMenuState);

export default wrapper(MenuUser) as ComponentClass;
