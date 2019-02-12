import React, { Component } from "react";
import { Container } from "reactstrap";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {}

  render() {
    return (
      <div>
        <Container>
          <h1>About</h1>
        </Container>
      </div>
    );
  }
}

export default About;
