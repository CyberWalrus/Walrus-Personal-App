import RoutePath from "@client/routes";
import { FunctionComponent, ReactElement } from "react";
import * as React from "react";
import { Route, RouteComponentProps, Switch } from "react-router-dom";
import ScreenUser from "../screen-user/screen-user";
import ScreenUsers from "../screen-users/screen-users";
const PageUser: FunctionComponent = (): ReactElement => {
  return (
    <Switch>
      <Route path={RoutePath.USER} exact={true} component={ScreenUsers} />
      <Route
        path={RoutePath.USER_LOGIN}
        exact={true}
        // tslint:disable-next-line:jsx-no-lambda
        render={(props: RouteComponentProps<{id: string}>): any => (
          <ScreenUser id={props.match.params.id} />
        )}
      />
    </Switch>
  );
};

export default PageUser;
