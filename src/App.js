import React from "react";
import { Provider } from "react-redux";
import configureStore, { history } from "./redux/configureStore";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import Users from "./components/Users";
import NotFound from "./components/NotFound";

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <>
        <Router history={history}>
          <Route path="/employees" component={Users} />
          <Route exact path="/" component={NotFound} />
        </Router>
      </>
    </ConnectedRouter>
  </Provider>
);

export default App;