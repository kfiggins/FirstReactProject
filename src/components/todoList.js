import React from "react";
import TodoListItem from "./todoListItem";

const TodoList = props => {
  return (
    <div>
      <div className="list-group">
        <TodoListItem />
      </div>
    </div>
  );
};

export default TodoList;
