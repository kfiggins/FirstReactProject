import React, { Component } from "react";
import ReactDOM from "react-dom";

import TodoInput from "./components/todoInput";
import TodoList from "./components/todoList";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [
        {
          name: "My first Todo",
          description: "Hopefully it works",
          id: 1
        },
        {
          name: "My second Todo",
          description: "Hopefully it works",
          id: 2
        },
        {
          name: "My thrid Todo",
          description: "Hopefully it works",
          id: 3
        }
      ]
    };
  }

  addTodoItem = todo => {
    todo.id = guid();
    this.setState({
      todoList: this.state.todoList.concat([todo])
    });
  };

  removeTodoItem = id => {
    this.setState({
      todoList: this.state.todoList.filter(obj => obj.id != id)
    });
  };

  render() {
    return (
      <div>
        <h1>Todo React APP!</h1>
        <TodoInput onClickAddTodo={this.addTodoItem} />
        <br />
        <TodoList
          todoList={this.state.todoList}
          removeTodoItem={this.removeTodoItem}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector(".container"));

// HELPER Functions
function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return (
    s4() +
    s4() +
    "-" +
    s4() +
    "-" +
    s4() +
    "-" +
    s4() +
    "-" +
    s4() +
    s4() +
    s4()
  );
}
