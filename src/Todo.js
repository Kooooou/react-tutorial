import React from "react";

const Todo = ({ task, toggle }) => {
  const handoleClick = () => {
    toggle(task.id);
  };
  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={task.completed}
          readOnly
          onChange={handoleClick}
        />
        {task.name}
      </label>
    </div>
  );
};

export default Todo;
