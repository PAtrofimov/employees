import React from "react";
import { Provider } from "react-redux";
import configureStore, { history } from "./redux/configureStore";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import EmployeesContainer from "./containers/EmployeesContainer";
import NotFound from "./components/NotFound";

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Router>
        <Route path="/employees" component={EmployeesContainer} />
        <Route exact path="/" component={NotFound} />
      </Router>
    </ConnectedRouter>
  </Provider>
);

export default App;
