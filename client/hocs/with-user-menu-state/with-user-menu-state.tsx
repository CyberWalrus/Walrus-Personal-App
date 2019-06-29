import { PropsHoc } from "@client/components/menu-user/menu-user";
import { getAuthorization, getUser } from "@client/store/user/selectors";
import { User } from "@client/type/data";
import { FormType } from "@config/constants";
import arrayMove from "array-move";
import * as React from "react";
import { ComponentClass, PureComponent, ReactElement } from "react";
import { connect } from "react-redux";
import { compose } from "recompose";
import { Operation } from "../../store/user/user";
import { StateApp, ThunkDispatch } from "../../type/reducer";

interface PropsState {
  isAuthorization: boolean;
  user: User;
}
interface PropsDispatch {
  onLogout: () => void;
}
type Props = PropsDispatch & PropsState;
interface State {
  isOpen: boolean;
}

const withUserMenuState = (Component: any): ComponentClass<Props> => {
  type P = ReturnType<typeof Component>;
  type PropsMenu = Props & P;
  class WithUserMenuState extends PureComponent<PropsMenu, State> {
    public constructor(props: Props) {
      super(props);
      this.state = {
        isOpen: false,
      };
      this.handlOpenChange = this.handlOpenChange.bind(this);
      this.handlLogout = this.handlLogout.bind(this);
      this.handlClickConteinerButton = this.handlClickConteinerButton.bind(
        this,
      );
    }
    public handlOpenChange(): void {
      this.setState({
        isOpen: !this.state.isOpen,
      });
    }
    public handlLogout(event: React.ChangeEvent<HTMLLinkElement>): void {
      event.preventDefault();
      this.props.onLogout();
    }
    public handlClickConteinerButton(
      event: React.ChangeEvent<HTMLLinkElement>,
    ): void {
      event.preventDefault();
      event.target.classList.toggle(`container-btn__btn_active`);
      event.target.parentElement.classList.toggle(`container-btn__item_active`);
    }
    public render(): ReactElement {
      return (
        <Component
          {...this.props}
          onLogout={this.handlLogout}
          onClickMenu={this.handlOpenChange}
          onButtonCLick={this.handlClickConteinerButton}
          isOpen={this.state.isOpen}
        />
      );
    }
  }

  return WithUserMenuState;
};

const mapStateToProps = (state: StateApp, ownProps: Props): Props => ({
  ...ownProps,
  user: getUser(state),
  isAuthorization: getAuthorization(state),
});

const mapDispatchToProps = (dispatch: ThunkDispatch): PropsDispatch => ({
  onLogout: (): void => {
    dispatch(Operation.logout());
  },
});

export { withUserMenuState };

export default compose<any, PropsHoc>(
  connect<Props, PropsDispatch, {}, StateApp>(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withUserMenuState,
);
