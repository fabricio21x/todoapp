import React, { Component } from "react";
import DefaultLayout from "./views/pages/DefaultLayout";
import Login from "./views/pages/auth/Login";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/login"
            name="Login Page"
            component={Login}
            render={props => <Login {...props} />}
          />
          <Route path="/" name="Start" component={DefaultLayout} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
