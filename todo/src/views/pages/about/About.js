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

          <div>
            <p>Created by Fabricio Monsalve Escudero</p>
            <p>
              fmonsalve@pucp.edu.pe |{" "}
              <a href="https://github.com/fabricio21x">Github</a>
            </p>
          </div>
        </Container>
      </div>
    );
  }
}

export default About;
