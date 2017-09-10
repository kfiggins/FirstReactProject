import React from "react";
import TodoListItem from "./todoListItem";

const TodoList = props => {
  const todoItems = props.todoList.map((todo, index) => {
    return (
      <TodoListItem
        todo={todo}
        key={todo.id}
        removeTodoItem={props.removeTodoItem}
      />
    ); //Index is not recommended for use as keys
  });
  return (
    <div>
      <div className="list-group">
        <ul className="list-group">{todoItems}</ul>
      </div>
    </div>
  );
};

export default TodoList;
