import React, { useState } from "react";

function TodoForm({ addTodo }) {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");
  const [priority, setPriority] = useState("Low");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task) return;
    addTodo({
      task,
      description,
      deadline,
      priority,
    });
    setTask("");
    setDescription("");
    setDeadline("");
    setPriority("Low");
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        className="input input-task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Task"
      />
      <textarea
        className="input"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      ></textarea>
      <input
        type="date"
        className="input"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
      />
      <select
        className="input"
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      >
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <button type="submit" className="submit-button">
        Add Task
      </button>
    </form>
  );
}

export default TodoForm;
