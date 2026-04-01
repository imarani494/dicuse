import React, { useState } from "react";

const TaskInput = ({ addTask }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!input.trim()) return;

    addTask(input);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="input-box">
      <input
        type="text"
        placeholder="Enter task..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit" className="add-btn">
        Add Task
      </button>
    </form>
  );
};

export default TaskInput;
