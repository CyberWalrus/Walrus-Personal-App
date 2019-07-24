import { createBrowserHistory } from "history";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import configureAPI from "./api/api";
import RoutePath from "./routes";
import NameSpace from "./store/name-spaces";
import reducer, { initialState } from "./store/store";

const persistConfig = {
  key: "root",
  storage,
  whitelist: [NameSpace.DATA, NameSpace.USER, NameSpace.CONDITION],
};

const history = createBrowserHistory();

const onServerError = (): void => {
  history.push(RoutePath.ERROR);
};
const api = configureAPI(onServerError);
const reducers = persistReducer(persistConfig, reducer);
const middlewares = [thunk.withExtraArgument(api)];

const store = createStore(
  reducers,
  undefined,
  composeWithDevTools(applyMiddleware(...middlewares)),
);
const persistor = persistStore(store);

export { store, persistor };
