import { UserRole } from "@client/type/data";
import { FormType } from "@config/constants";
import arrayMove from "array-move";
import * as React from "react";
import { ComponentClass, PureComponent, ReactElement } from "react";
import { connect } from "react-redux";
import { compose } from "recompose";
import { Operation } from "../../store/data/data";
import { getUserRoles } from "../../store/data/selectors";
import { StateApp, ThunkDispatch } from "../../type/reducer";
interface PropsState {
  userRoles: UserRole[];
}
interface State {
  userRoles: UserRole[];
}
interface PropsDispatch {
  onUserRoleLoad: () => void;
  onAddUserRole: (name: string) => void;
}
interface HandlSortEnd {
  oldIndex: number;
  newIndex: number;
}
type Props = PropsState & PropsDispatch;

const withDataState = (Component: any): ComponentClass<Props> => {
  type P = ReturnType<typeof Component>;
  type PropsAuthorization = Props & P;
  class WithDataState extends PureComponent<PropsAuthorization, State> {
    public static getDerivedStateFromProps(
      nextProps: Props,
      prevState: State,
    ): State {
      if (prevState.userRoles.length === 0) {
        return nextProps;
      }
      return prevState;
    }
    public constructor(props: PropsAuthorization) {
      super(props);
      this.state = {
        userRoles: this.props.userRoles,
      };
      this.handlSortEnd = this.handlSortEnd.bind(this);
    }
    public componentDidMount(): void {
      this.props.onUserRoleLoad();
    }
    public handlSortEnd({oldIndex, newIndex}: HandlSortEnd): void {
      this.setState({
        userRoles: arrayMove(this.state.userRoles, oldIndex, newIndex),
      });
    }
    public render(): ReactElement {
      return (
        <Component
          {...this.props}
          userRoles={this.state.userRoles}
          onSortEnd={this.handlSortEnd}
        />
      );
    }
  }

  return WithDataState;
};

const mapStateToProps = (state: StateApp, ownProps: Props): Props => ({
  ...ownProps,
  userRoles: getUserRoles(state),
});

const mapDispatchToProps = (dispatch: ThunkDispatch): PropsDispatch => ({
  onUserRoleLoad: (): void => {
    dispatch(Operation.getUserRoles());
  },
  onAddUserRole: (name: string): void => {
    dispatch(Operation.addUserRole(name));
  },
});

export { withDataState };

export default compose(
  connect<Props, PropsDispatch, {}, StateApp>(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withDataState,
);
