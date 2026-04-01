import React from "react";

const TaskItem = ({ task, toggleTask, deleteTask }) => {
  return (
    <div className="task">
      <span className={task.completed ? "completed" : ""}>
        {task.text} ({task.completed ? "Completed" : "Pending"})
      </span>

      <div>
        <button onClick={() => toggleTask(task.id)}>Complete</button>
        <button onClick={() => deleteTask(task.id)}>Delete</button>
      </div>
    </div>
  );
};

export default TaskItem;
