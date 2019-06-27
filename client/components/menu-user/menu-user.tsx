import withUserMenuState from "@client/hocs/with-user-menu-state/with-user-menu-state";
import RoutePath from "@client/routes";
import { User } from "@client/type/data";
import { FormType } from "@config/constants";
import * as React from "react";
import { ComponentClass, FunctionComponent, ReactElement } from "react";
import { Link } from "react-router-dom";
import { compose } from "recompose";
import FormCustom from "../form-custom/form-custom";

export interface PropsHoc {
  isOpen: boolean;
  isAuthorization: boolean;
  user: User;
  onLogout: () => void;
  onClickMenu: () => void;
}
type Props = PropsHoc;
const MenuUser: FunctionComponent<Props> = ({
  isOpen,
  isAuthorization,
  user,
  onClickMenu,
  onLogout,
}: Props): ReactElement => {
  return (
    <div className={`menu-user-box`}>
      <button onClick={onClickMenu} className={`menu-user-box__btn`}>
        {isAuthorization ? (
          <React.Fragment>{user ? user.login : ``}</React.Fragment>
        ) : (
          `SignIn/SignUp`
        )}
      </button>
      <div className={isOpen ? `menu-user` : `menu-user_close`}>
        {isAuthorization ? (
          <div className={`user`}>
            <Link to={RoutePath.OPTION} className={`user__link`}>
              Option
            </Link>
            <button onClick={onLogout} className={`menu-user-box__btn`}>
              Logout
            </button>
          </div>
        ) : (
          <div className={`user`}>
            <FormCustom formType={FormType.SIGN_IN} titel={`Sign In`} />
            <Link to={RoutePath.SIGNUP} className={`user__link`}>
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export { MenuUser };

const wrapper = compose(withUserMenuState);

export default wrapper(MenuUser) as ComponentClass;
