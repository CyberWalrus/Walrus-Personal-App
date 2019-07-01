import withUserMenuState from "@client/hocs/with-user-menu-state/with-user-menu-state";
import RoutePath from "@client/routes";
import { User } from "@client/type/data";
import { FormType } from "@config/constants";
import * as React from "react";
import { ComponentClass, FunctionComponent, ReactElement } from "react";
import { Link } from "react-router-dom";
import { compose } from "recompose";
import ContainerButton from "../container-button/container-button";
import FormCustom from "../form-custom/form-custom";

export interface PropsHoc {
  isOpen: boolean;
  isAuthorization: boolean;
  user: User;
  onLogout: () => void;
  onClickMenu: () => void;
  onButtonCLick: () => void;
}
type Props = PropsHoc;
const MenuUser: FunctionComponent<Props> = ({
  isOpen,
  isAuthorization,
  user,
  onClickMenu,
  onLogout,
  onButtonCLick,
}: Props): ReactElement => {
  return (
    <div className={`menu-user-box`}>
      <button
        onClick={onClickMenu}
        className={
          isAuthorization ? `menu-user-box__btn menu-user-box__btn_icon` : `menu-user-box__btn`
        }
      >
        {isAuthorization ? (
          <React.Fragment>{`L`}</React.Fragment>
        ) : (
          `SignIn/SignUp`
        )}
      </button>
      <div className={!isOpen ? `menu-user` : `menu-user menu-user_open`}>
        <div className={`menu-user__arrow`} />
        {isAuthorization ? (
          <div className={`menu-user__box`}>
            <nav className={`menu-user__nav`}>
              <ul className={`menu-user__ul`}>
                <li className={`menu-user__item`}>
                  <ContainerButton onButtonCLick={onButtonCLick} />
                </li>
                <li className={`menu-user__item`}>
                  <Link to={RoutePath.OPTION} className={`menu-user__link`}>
                    <div className={`menu-user__icon`}>{`O`}</div>
                    <div className={`menu-user__text`}>Option</div>
                  </Link>
                </li>
                <li className={`menu-user__item`}>
                  <Link to={RoutePath.INFO} className={`menu-user__link`}>
                    <div className={`menu-user__icon`}>{`i`}</div>
                    <div className={`menu-user__text`}>Info</div>
                  </Link>
                </li>
                <li className={`menu-user__item`}>
                  <a
                    href={`#`}
                    onClick={onLogout}
                    className={`menu-user__link`}
                  >
                    <div className={`menu-user__icon`}>{`Y`}</div>
                    <div className={`menu-user__text`}>Logout</div>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        ) : (
          <div className={`menu-user__box`}>
            <nav className={`menu-user__nav`}>
              <ul className={`menu-user__ul`}>
                <li className={`menu-user__item`}>
                  <ContainerButton onButtonCLick={onButtonCLick} />
                </li>
                <li className={`menu-user__item`}>
                  <FormCustom
                    formType={FormType.SIGN_IN}
                    titel={`Sign In`}
                    isTitel={false}
                  />
                </li>
                <li className={`menu-user__item`}>
                  <Link to={RoutePath.SIGNUP} className={`menu-user__link`}>
                    <div className={`menu-user__icon`}>{`N`}</div>
                    <div className={`menu-user__text`}>SignUp</div>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
};

export { MenuUser };

const wrapper = compose<PropsHoc, {}>(withUserMenuState);

export default wrapper(MenuUser) as ComponentClass;
