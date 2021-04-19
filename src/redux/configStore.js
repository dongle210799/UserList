import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "../reducer/index";
import thunk from "redux-thunk";
const composeEnhencers =
  process.env.NODE_ENV !== "production" &&
  typeof window === "object" &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        shouldHotReload: false,
      })
    : compose;

const configStore = () => {
  const middlewares = [thunk];
  const enhancers = [applyMiddleware(...middlewares)];
  const store = createStore(rootReducer, composeEnhencers(...enhancers));
  return store;
};
export default configStore;
