import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { compose } from "recompose";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import App from "./components/app/app";
import reducer from "./store/store";

declare const __REDUX_DEVTOOLS_EXTENSION__: () => any;

const init = (): void => {
  const store = createStore(
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
