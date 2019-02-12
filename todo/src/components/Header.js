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

  componentWillMount() {}

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
      </div>
    );
  }
}

export default Header;
