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

import ToggleListItem from "../../../components/ToggleListItem";

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
      newItem: "",
      items: []
    };

    this.confirmEdit = this.confirmEdit.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  componentWillMount() {
    this.loadItems();
  }

  async loadItems() {
    await http
      .get("list")
      .then(res => {
        this.setState({ items: res.data.items });
      })
      .catch(err => console.error(err));
  }

  addItem() {
    const { newItem } = this.state;

    if (newItem.length === 0) {
      toast.warning("Write something!!");
      return;
    }

    http
      .post("item", {
        description: newItem
      })
      .then(res => {
        toast.success("Item added successfully!");
        this.setState({ newItem: "" });
        this.loadItems();
      })
      .catch(err => {
        toast.error("Somewthing went wrong! :( Try it again");
        console.error(err);
      });
  }

  confirmEdit(item) {
    http
      .put(`item/${item.id}`, {
        description: item.description,
        status: item.status
      })
      .then(res => {
        this.loadItems();
        toast.success("Item updated successfuly");
      })
      .catch(err => {
        toast.error("Something went wrong! Try again please.");
        console.error(err);
      });
  }

  deleteItem(item) {
    http
      .delete(`item/${item.id}`)
      .then(res => {
        this.loadItems();
        toast.success("Item deleted successfuly");
      })
      .catch(err => {
        toast.error("Something went wrong! Try again please.");
        console.error(err);
      });
  }

  renderItemsList() {
    const { items } = this.state;
    return (
      <ListGroup flush>
        {items.map((item, key) => (
          <ToggleListItem
            key={key}
            item={item}
            deleteItem={this.deleteItem}
            confirmEdit={this.confirmEdit}
          />
        ))}
      </ListGroup>
    );
  }

  renderItemsCard() {
    return (
      <Card outline color="info">
        <CardBody>
          <CardTitle>
            <strong>List</strong>
          </CardTitle>
          {this.renderItemsList()}
        </CardBody>
      </Card>
    );
  }

  renderNewItemForm() {
    const { newItem } = this.state;

    return (
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>
            <i className="fas fa-hand-point-right" />
          </InputGroupText>
        </InputGroupAddon>
        <Input
          type="text"
          value={newItem}
          onChange={ev => {
            this.setState({ newItem: ev.target.value });
          }}
          onKeyPress={ev => {
            var code = ev.keyCode || ev.which;
            if (code === 13) {
              this.addItem();
            }
          }}
          placeholder="Add text here..."
        />
        <InputGroupAddon addonType="append">
          <Button color="success" onClick={() => this.addItem()}>
            <i className="fas fa-plus" />
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
            <Col lg="6" sm="12">
              {this.renderNewItemCard()}
            </Col>
            <Col lg="6" sm="12">
              {this.renderItemsCard()}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Home;
