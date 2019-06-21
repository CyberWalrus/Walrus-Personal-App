import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore, Store } from "redux";
import App from "./components/app/app";
import reducer from "./store/store";

declare const __REDUX_DEVTOOLS_EXTENSION__: () => any;

const init: () => void = (): void => {
  const store: Store = createStore(
    reducer,
    __REDUX_DEVTOOLS_EXTENSION__ && __REDUX_DEVTOOLS_EXTENSION__(),
  );
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#app`),
  );
};

init();
