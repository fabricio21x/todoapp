import React, { Component } from "react";
import { Link } from "react-router-dom";
import headerItems from "../nav_";
import { Button } from "reactstrap";
import "./header.scss";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    console.log(this.props);
  }

  render() {
    return (
      <div className="main-header">
        <div className="logo-container">
          {/* <img alt="Logo" src="../assets/images/full-logo.svg" /> */}
        </div>
        <ul className="nav-bar">
          {headerItems.map((item, idx) => (
            <li key={idx}>
              <Link to={item.url}>{item.name}</Link>
            </li>
          ))}
        </ul>
        <div className="auth-container">
          <Button
            color="primary"
            onClick={() => this.props.history.push("/login")}
          >
            Ingresar
          </Button>
        </div>
      </div>
    );
  }
}

export default Header;
