import React, { Component } from "react";

class TodoInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleValue: "",
      descriptionValue: ""
    };
  }

  render() {
    return (
      <div>
        <div className="form-group">
          <label>Title</label>
          <input
            value={this.state.titleValue}
            onChange={evt => this.updateTitleValue(evt)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <input
            value={this.state.descriptionValue}
            onChange={evt => this.updateDescriptionValue(evt)}
            className="form-control"
          />
        </div>
        <button
          id="addButton"
          className="btn btn-success"
          onClick={() =>
            this.props.onClickAddTodo({
              name: this.state.titleValue,
              description: this.state.descriptionValue
            })}
        >
          Add
        </button>
      </div>
    );
  }
  updateTitleValue = evt => {
    this.setState({
      titleValue: evt.target.value
    });
  };
  updateDescriptionValue = evt => {
    this.setState({
      descriptionValue: evt.target.value
    });
  };
}

export default TodoInput;
