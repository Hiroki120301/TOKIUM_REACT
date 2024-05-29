import React from "react";

function Todo({ todo, index, removeTodo }) {
  return (
    <div className="todo">
      <div>
        <h3>{todo.task}</h3>
        <p>{todo.description}</p>
        <p>Deadline: {todo.deadline}</p>
        <p>Priority: {todo.priority}</p>
      </div>
      <button onClick={() => removeTodo(index)} className="delete-button">
        Delete
      </button>
    </div>
  );
}

export default Todo;
