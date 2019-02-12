import React, { Component } from "react";
import { Container } from "reactstrap";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {}

  render() {
    return (
      <div>
        <Container>
          <h1>HOME</h1>
        </Container>
      </div>
    );
  }
}

export default Home;
