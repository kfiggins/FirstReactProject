import React, { Component } from "react";

class TodoInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: ""
    };
  }

  render() {
    return (
      <div>
        <input />
        <button id="addButton" className="btn btn-success">
          Add
        </button>
      </div>
    );
  }
}

export default TodoInput;
