import React from "react";
import { v4 as uuid } from "uuid";
import Task from "./Task";

function TaskList( { tasks, setTasks }) {

  const tasksToDisplay = tasks.slice()
  
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
