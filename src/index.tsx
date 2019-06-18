import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { compose } from "recompose";
import { applyMiddleware, createStore, Store } from "redux";
import thunk from "redux-thunk";
import App from "./components/app/app";
import reducer from "./store/store";
import { StateApp } from "./type/reducer";

declare const __REDUX_DEVTOOLS_EXTENSION__: () => void;

const init: () => void = (): void => {
  const store: Store = createStore(
    reducer,
    compose(__REDUX_DEVTOOLS_EXTENSION__ && __REDUX_DEVTOOLS_EXTENSION__()),
  );
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#app`),
  );
};

init();
