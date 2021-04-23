import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "../reducer/index";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../sagas/users";
import thunk from "redux-thunk";
const composeEnhencers =
  process.env.NODE_ENV !== "production" &&
  typeof window === "object" &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        shouldHotReload: false,
      })
    : compose;
const sagaMiddleware = createSagaMiddleware();

const configStore = () => {
  console.log(rootReducer);
  const middlewares = [thunk, sagaMiddleware];
  const enhancers = [applyMiddleware(...middlewares)];
  const store = createStore(rootReducer, composeEnhencers(...enhancers));
  sagaMiddleware.run(rootSaga);
  return store;
};
export default configStore;
