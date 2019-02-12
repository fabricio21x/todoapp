import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  CardBody,
  CardHeader,
  CardTitle,
  CardText,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  ListGroup,
  ListGroupItem,
  Badge
} from "reactstrap";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import http from "../../../utils/http";

const containerStyle = {
  zIndex: 9999
};

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newIten: null,
      items: []
    };
  }

  componentWillMount() {
    this.loadItems();
  }

  async loadItems() {
    await http
      .get("items")
      .then(res => {
        this.setState({ items: res.data });
      })
      .catch(err => console.error(err));
  }

  addItem() {
    const { newItem } = this.state;

    http
      .post("new", {
        data: newItem
      })
      .then(res => {
        toast.sucess("Item added successfully!");
      })
      .catch();
  }

  renderItemsList() {
    return (
      <ListGroup>
        <ListGroupItem tag="button" action>
          {/* <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <Input
                  addon
                  type="checkbox"
                  aria-label="Checkbox for following text input"
                />
              </InputGroupText>
            </InputGroupAddon>
            <Input />
          </InputGroup> */}
        </ListGroupItem>
      </ListGroup>
    );
  }

  renderItemsCard() {
    return (
      <Card>
        <CardHeader>
          <strong>List</strong>
        </CardHeader>
        <CardBody>{this.renderItemsList()}</CardBody>
      </Card>
    );
  }

  renderNewItemForm() {
    return (
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>
            <i class="fas fa-hand-point-right" />
          </InputGroupText>
        </InputGroupAddon>
        <Input type="text" placeholder="Add text here..." />
        <InputGroupAddon addonType="append">
          <Button color="success">
            <i class="fas fa-plus" />
          </Button>
        </InputGroupAddon>
      </InputGroup>
    );
  }

  renderNewItemCard() {
    return (
      <Card outline color="info">
        <CardBody>
          <CardTitle>
            <strong>Add a new item</strong>
          </CardTitle>
          <CardText>Type the description of the new item for the list</CardText>
          {this.renderNewItemForm()}
        </CardBody>
      </Card>
    );
  }

  render() {
    return (
      <div>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          style={containerStyle}
        />
        <Container>
          <Row>
            <h1>Things to do...</h1>
          </Row>
          <Row>
            <Col sm="6">{this.renderNewItemCard()}</Col>
            <Col sm="6">{this.renderItemsCard()}</Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Home;
