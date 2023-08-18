import React from "react";
import { v4 as uuid } from "uuid";
import Task from "./Task";

function TaskList( { tasks, setTasks, selectedCategory }) {

  const tasksToDisplay = tasks.filter(task => { 
    if (selectedCategory === "All") {
      return true
    }
    return (task.category === selectedCategory )})
  
  return (
    <div className="tasks">
      {tasksToDisplay.map((task, index) => 
        <Task 
          key={uuid()} 
          index={index}
          text={task.text} 
          category={task.category} 
          tasks={tasks} 
          setTasks={setTasks} 
        />
      )}
    

      
    </div>
  );
}

export default TaskList;
