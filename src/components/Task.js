import React from "react";

function Task({ text, category, index, tasks, setTasks }) {

  function handleDelete() {
    const newTasks = tasks.slice()
    newTasks.splice(index, 1)
    setTasks(newTasks)
  }
  
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleDelete} >X</button>
    </div>
  );
}

export default Task;
