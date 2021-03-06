import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import Room from "../components/Room";
import Browse from "../components/Browse";

import "./index.css";
import "typeface-roboto";

// Redux Setup
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "../reducers/rootReducer";

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default (
  <Provider store={store}>
    <Router>
      <div className="appWrapper">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/meet/:room_type/:room_name/:host/:room_id"
            component={Room}
          />
          <Route
            exact
            path="/browse"
            component={Browse}
          />
        </Switch>
      </div>
    </Router>
  </Provider>
);
