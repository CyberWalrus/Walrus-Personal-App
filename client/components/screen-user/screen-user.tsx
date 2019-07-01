import { User } from "@client/type/data";
import { ComponentClass, PureComponent, ReactElement } from "react";
import * as React from "react";
import { connect } from "react-redux";
import { Operation } from "../../store/data/data";
import { getUser } from "../../store/data/selectors";
import { StateApp, ThunkDispatch } from "../../type/reducer";

interface PropsInsert {
  id: string;
}
interface PropsState {
  user: User;
}
interface PropsDispatch {
  onUserLoad: (id: string) => void;
}
type Props = PropsInsert & PropsState & PropsDispatch;

class ScreenUser extends PureComponent<Props> {
  public componentDidMount(): void {
    const id = this.props.id;
    this.props.onUserLoad(id);
  }
  public render(): ReactElement {
    const { user }: Props = this.props;
    return (
      <main className={`page-content`}>
        <section className={`form-custom-box`}>
          {user ? (
            <div>
              <div>{user.id}</div>
              <div>{user.login}</div>
            </div>
          ) : (
            <React.Fragment />
          )}
        </section>
      </main>
    );
  }
}

const mapStateToProps = (state: StateApp, ownProps: Props): Props => ({
  ...ownProps,
  user: getUser(state),
});

const mapDispatchToProps = (dispatch: ThunkDispatch): PropsDispatch => ({
  onUserLoad: (id: string): void => {
    dispatch(Operation.getUser(id));
  },
});

export { ScreenUser };

export default connect<Props, PropsDispatch, PropsInsert, StateApp>(
  mapStateToProps,
  mapDispatchToProps,
)(ScreenUser) as ComponentClass<PropsInsert>;
