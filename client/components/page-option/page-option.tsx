import { UserRole } from "@client/type/data";
import * as React from "react";
import { PureComponent, ReactElement } from "react";
import { connect } from "react-redux";
import { Operation } from "../../store/data/data";
import { getUserRoles } from "../../store/data/selectors";
import { StateApp, ThunkDispatch } from "../../type/reducer";
import Footer from "../footer/footer";
import Header from "../header/header";

interface PropsState {
  userRoles: UserRole[];
}
interface PropsDispatch {
  onUserRoleLoad: () => void;
  onAddUserRole: (name: string) => void;
}
type Props = PropsDispatch & PropsState;
interface State {
  name: string;
}
class PageOptions extends PureComponent<Props, State> {
  public constructor(props: Props) {
    super(props);
    this.state = {
      name: ``,
    };
    this._handlSubmit = this._handlSubmit.bind(this);
    this._handleUserInput = this._handleUserInput.bind(this);

  }
  public componentWillMount(): void {
    this.props.onUserRoleLoad();
  }
  public render(): ReactElement {
    const userRoles = this.props.userRoles;
    return (
      <div className={`page`}>
        <Header />
        <main className={`page-content`}>
          <section>
            <h2>Options</h2>
            <article>
              {userRoles &&
                userRoles.map((item: UserRole, index: number) => (
                  <p key={index}>
                    {item.name} {item.id}
                  </p>
                ))}
            </article>
          </section>
          <section>
            <form onSubmit={this._handlSubmit}>
              <h2>Add User Role</h2>
              <div>
                <input
                  type={`text`}
                  name={`name`}
                  value={this.state.name}
                  onChange={this._handleUserInput}
                />
              </div>
              <div>
                <button className={``} type="submit">
                  Add
                </button>
              </div>
            </form>
          </section>
        </main>
        <Footer />
      </div>
    );
  }
  private _handleUserInput(event: React.ChangeEvent<HTMLInputElement>): void {
    const key = event.target.name as keyof State;
    const value = event.target.value as string;
    this.setState<never>({ [key]: value });
  }
  private _handlSubmit(event: React.ChangeEvent<HTMLFormElement>): void {
    event.preventDefault();
    this.props.onAddUserRole(this.state.name);
  }
}

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

export { PageOptions };
export default connect<Props, PropsDispatch, {}, StateApp>(
  mapStateToProps,
  mapDispatchToProps,
)(PageOptions);
