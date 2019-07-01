import RoutePath, { getRoute } from "@client/routes";
import { User } from "@client/type/data";
import { PureComponent, ReactElement } from "react";
import * as React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Operation } from "../../store/data/data";
import { getUsers } from "../../store/data/selectors";
import { StateApp, ThunkDispatch } from "../../type/reducer";

interface PropsState {
  users: User[];
}
interface PropsDispatch {
  onUsersLoad: () => void;
}
type Props = PropsState & PropsDispatch;

class ScreenUsers extends PureComponent<Props> {
  public componentDidMount(): void {
    this.props.onUsersLoad();
  }
  public render(): ReactElement {
    const { users }: Props = this.props;
    return (
      <main className={`page-content`}>
        <section className={`form-custom-box`}>
          {users &&
            users.map((item: User, index: number) => (
              <Link to={getRoute(item.id, RoutePath.USER_LOGIN)} key={index}>
                <div>{item.id}</div>
                <div>{item.login}</div>
                <div>{item.email}</div>
              </Link>
            ))}
        </section>
      </main>
    );
  }
}

const mapStateToProps = (state: StateApp, ownProps: Props): Props => ({
  ...ownProps,
  users: getUsers(state),
});

const mapDispatchToProps = (dispatch: ThunkDispatch): PropsDispatch => ({
  onUsersLoad: (): void => {
    dispatch(Operation.getUsers());
  },
});

export { ScreenUsers };

export default connect<Props, PropsDispatch, {}, StateApp>(
  mapStateToProps,
  mapDispatchToProps,
)(ScreenUsers);
