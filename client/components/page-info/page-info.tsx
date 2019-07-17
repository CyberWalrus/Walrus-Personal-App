import { User } from "@client/type/data";
import { iconNames } from "@config/constants";
import * as React from "react";
import { PureComponent, ReactElement } from "react";
import { connect } from "react-redux";
import { Operation } from "../../store/data/data";
import { getUsers } from "../../store/data/selectors";
import { StateApp, ThunkDispatch } from "../../type/reducer";

interface PropsState {
  users: User[];
}
interface PropsDispatch {
  onUserLoad: () => void;
}
type Props = PropsDispatch & PropsState;
class PageInfo extends PureComponent<Props> {
  public componentWillMount(): void {
    this.props.onUserLoad();
  }
  public render(): ReactElement {
    const users = this.props.users;
    console.log(users);
    return (
      <main className={`page-content`}>
        <section>
          <h2>Info</h2>
          <article>
            {users &&
              users.map((item: User, index: number) => (
                <p key={index}>
                  {item.login} {item.id}
                </p>
              ))}
          </article>
          <article>
            <dl className={`info-icon`}>
              {iconNames.map((item: string, index: number) => (
                <React.Fragment key={index}>
                  <dt className={`info-icon__titel`}>{item} :</dt>
                  <dd className={`info-icon__item icon`}>{item}</dd>
                </React.Fragment>
              ))}
            </dl>
          </article>
          <article className={`test`} />
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
  onUserLoad: (): void => {
    dispatch(Operation.getUsers());
  },
});

export { PageInfo };
export default connect<Props, PropsDispatch, {}, StateApp>(
  mapStateToProps,
  mapDispatchToProps,
)(PageInfo);
