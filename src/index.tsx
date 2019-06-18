import * as React from "react";
import * as ReactDOM from "react-dom";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import {compose} from "recompose";
import reducer from "./store/store";
import App from "./components/app/app";

declare const __REDUX_DEVTOOLS_EXTENSION__: () => any;

const init = (): void => {
  const store = createStore(
    reducer,
    compose(__REDUX_DEVTOOLS_EXTENSION__ && __REDUX_DEVTOOLS_EXTENSION__())
  );
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#app`)
  );
};

init();
