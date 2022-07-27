import React from "react";

const Todo = ({ task, toggle }) => {
  const handleClick = () => {
    toggle(task.id);
  };
  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={task.completed}
          readOnly
          onChange={handleClick}
        />
        {task.name}
      </label>
    </div>
  );
};

export default Todo;
