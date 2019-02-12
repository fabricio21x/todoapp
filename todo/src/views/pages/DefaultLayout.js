import React, { Component } from "react";
import Header from "../../components/Header";
import { Redirect, Route, Switch } from "react-router-dom";
import { Container } from "reactstrap";
import routes from "../../routes";

class DefaultLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="main-page">
        <Header {...this.props} />
        <Container fluid>
          <Switch>
            {routes.map((route, idx) => {
              return route.component ? (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={props => <route.component {...props} />}
                />
              ) : (
                <div>{route.name}</div>
              );
            })}
            <Redirect from="/" to="/home" />
          </Switch>
        </Container>
      </div>
    );
  }
}

export default DefaultLayout;
