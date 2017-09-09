import React, { Component } from "react";
import ReactDOM from "react-dom";

import TodoInput from "./components/todoInput";
import TodoList from "./components/todoList";

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Todo React APP!</h1>
        <TodoInput />
        <br />
        <TodoList />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector(".container"));
