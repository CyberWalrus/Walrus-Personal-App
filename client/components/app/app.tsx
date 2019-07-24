import RoutePath from "@client/routes";
import * as React from "react";
import { FunctionComponent, ReactElement } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Footer from "../footer/footer";
import Header from "../header/header";
import MenuBottom from "../menu-bottom/menu-bottom";
import PageInfo from "../page-info/page-info";
import PageLogin from "../page-login/page-login";
import PageMain from "../page-main/page-main";
import PageOption from "../page-option/page-option";
import PageSignUp from "../page-sign-up/page-sign-up";
import PageTime from "../page-time/page-time";
import PageUser from "../page-user/page-user";

const App: FunctionComponent = (): ReactElement => {
  return (
    <div className={`page`}>
      <Header />
      <MenuBottom />
      <Switch>
        <Route path={RoutePath.INDEX} exact={true} component={PageMain} />
        <Route path={RoutePath.INFO} exact={true} component={PageInfo} />
        <Route path={RoutePath.LOGIN} exact={true} component={PageLogin} />
        <Route path={RoutePath.SIGNUP} exact={true} component={PageSignUp} />
        <Route path={RoutePath.OPTION} exact={true} component={PageOption} />
        <Route path={RoutePath.USER} exact={true} component={PageUser} />
        <Route path={RoutePath.TIME} exact={true} component={PageTime} />
      </Switch>
    </div>
  );
};

export default App;
