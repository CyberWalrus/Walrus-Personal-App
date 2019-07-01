import RoutePath from "@client/routes";
import { FunctionComponent, ReactElement } from "react";
import * as React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Footer from "../footer/footer";
import Header from "../header/header";
import PageInfo from "../page-info/page-info";
import PageLogin from "../page-login/page-login";
import PageMain from "../page-main/page-main";
import PageOption from "../page-option/page-option";
import PageSignUp from "../page-sign-up/page-sign-up";
import PageUser from "../page-user/page-user";

const App: FunctionComponent = (): ReactElement => {
  return (
    <div className={`page`}>
      <Header />
      <Switch>
        <Route path={RoutePath.INDEX} exact={true} component={PageMain} />
        <Route path={RoutePath.INFO} component={PageInfo} />
        <Route path={RoutePath.LOGIN} component={PageLogin} />
        <Route path={RoutePath.SIGNUP} component={PageSignUp} />
        <Route path={RoutePath.OPTION} component={PageOption} />
        <Route path={RoutePath.USER} component={PageUser} />
        <Redirect to={RoutePath.INDEX} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
