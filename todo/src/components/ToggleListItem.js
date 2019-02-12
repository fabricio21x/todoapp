import React, { Component } from "react";
import { ListGroupItem, Row, Col, Button, Input } from "reactstrap";

import http from "../utils/http";

import "./ToggleListItem.scss";

class ToggleListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleState: this.props.item.status === 1 ? true : false,
      toggleEdit: false,
      editValue: this.props.item.description
    };

    this.toggleState = this.toggleState.bind(this);
  }

  toggleState(event) {
    event.preventDefault();

    const { toggleState } = this.state;

    let item = this.props.item;
    item.status = toggleState ? 0 : 1;

    this.props.confirmEdit(item);

    this.setState({ toggleState: !this.state.toggleState });
  }

  confirmEdit() {
    const { editValue } = this.state;

    let item = this.props.item;
    item.description = editValue;

    this.props.confirmEdit(item);

    this.setState({ toggleEdit: !this.state.toggleEdit });
  }

  render() {
    const { toggleState, toggleEdit, editValue } = this.state;

    return (
      <ListGroupItem action>
        <Row>
          <Col sm="9" xs="8">
            {toggleState ? (
              <i
                onClick={this.toggleState}
                className="far fa-star checkLogo doneBtn"
              />
            ) : (
              <i
                onClick={this.toggleState}
                className="fas fa-thumbs-up checkLogo checkBtn"
              />
            )}

            {toggleEdit ? (
              <Input
                className="form-control-tg"
                type="text"
                value={editValue}
                onChange={ev => this.setState({ editValue: ev.target.value })}
                placeholder="Insert text"
              />
            ) : (
              <span className={toggleState ? "crossed-text" : ""}>
                {this.props.item.description}
              </span>
            )}
          </Col>
          <Col sm="3" xs="4">
            <i
              className={
                "fas checkLogo " + (toggleEdit ? "fa-times" : "fa-pencil-alt")
              }
              onClick={ev => {
                this.setState({
                  toggleEdit: !toggleEdit,
                  editValue: this.props.item.description
                });
              }}
            />
            {toggleEdit ? (
              <i
                className="fas fa-check checkLogo"
                onClick={() => this.confirmEdit()}
              />
            ) : null}
            <i
              className="fas fa-trash checkLogo delBtn"
              onClick={() => this.props.deleteItem(this.props.item)}
            />
          </Col>
        </Row>
      </ListGroupItem>
    );
  }
}

export default ToggleListItem;
