import { createBrowserHistory } from "history";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import thunk from "redux-thunk";
import configureAPI from "./api/api";
import App from "./components/app/app";
import RoutePath from "./routes";
import reducer, { initialState } from "./store/store";

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
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#app`),
  );
};

init();
