import React from "react";

const TodoListItem = props => {
  return (
    <div>
      <li className="list-group-item">
        <div className="float-right">
          <button
            className="btn-sm btn-danger"
            onClick={() => props.removeTodoItem(props.todo.id)}
          >
            X
          </button>
        </div>
        <div className="todo-title">
          <strong>{props.todo.name}</strong>
        </div>
        <div className="todo-details">{props.todo.description}</div>
      </li>
    </div>
  );
};

export default TodoListItem;
