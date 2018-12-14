import React from "react";
import ReactDOM from "react-dom";
import {
  ConnectedRouter,
  routerMiddleware,
  connectRouter
} from "connected-react-router";
import "./index.css";
import App from "./Components/App";
import * as serviceWorker from "./serviceWorker";
// redux thunk is middleware but need to specify on redux
import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import kwitterReducer from "./Reducers/reducer";
import { createBrowserHistory } from "history";

const history = createBrowserHistory({basename: process.env.PUBLIC_URL});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  connectRouter(history)(kwitterReducer),
  composeEnhancers(applyMiddleware(routerMiddleware(history), thunk))
);

const Index = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>
);

ReactDOM.render(<Index />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
