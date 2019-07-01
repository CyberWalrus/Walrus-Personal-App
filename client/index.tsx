import { Operation } from "@client/store/user/user";
import { COOKIE_NAME } from "@config/constants";
import { createBrowserHistory } from "history";
import * as Cookies from "js-cookie";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { applyMiddleware, createStore, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import thunk from "redux-thunk";
import configureAPI from "./api/api";
import App from "./components/app/app";
import RoutePath from "./routes";
import reducer, { initialState } from "./store/store";
import { ThunkDispatch } from "./type/reducer";

const history = createBrowserHistory();

const onServerError = (): void => {
  history.push(RoutePath.ERROR);
};

const init = (): void => {
  const api = configureAPI(onServerError);
  const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api))),
  );
  const token = Cookies.get(COOKIE_NAME);
  if (token) {
    store.dispatch(Operation.loadSession(token));
  }
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
    document.querySelector(`#app`),
  );
};

init();
