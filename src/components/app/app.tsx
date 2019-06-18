import * as React from "react";
import {FunctionComponent, ReactElement} from "react";
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import RoutePath from "../../routes";
import PageMain from "../page-main/page-main";
import PageTest from "../page-test/page-test";

const App: FunctionComponent = (): ReactElement => {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path={RoutePath.INDEX}
          exact
          render={(): ReactElement => <PageMain />}
        />
        <Route
          path={RoutePath.TEST}
          exact
          render={(): ReactElement => <PageTest />}
        />
        <Redirect to={RoutePath.INDEX} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
