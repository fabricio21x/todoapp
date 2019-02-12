import React, { Component } from "react";
import DefaultLayout from "./views/pages/DefaultLayout";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" name="Start" component={DefaultLayout} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
