import * as React from "react";
import { FunctionComponent, ReactElement } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import RoutePath from "../../routes";
import PageLogin from "../page-login/page-login";
import PageMain from "../page-main/page-main";

const App: FunctionComponent = (): ReactElement => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={RoutePath.INDEX} exact={true} component={PageMain} />
        <Route path={RoutePath.TEST} exact={true} component={PageLogin} />
        <Redirect to={RoutePath.INDEX} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
