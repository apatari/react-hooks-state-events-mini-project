import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function NewTaskForm({ categories, onTaskFormSubmit }) {

  const [ taskCategory, setTaskCategory ] = useState("All")
  const [ taskText, setTaskText ] = useState("")

  function handleTextChange(e) {
    setTaskText(e.target.value)
  }

  function handleCategoryChange(e) {
    setTaskCategory(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    const taskObj = {
      text: taskText,
      category: taskCategory,
      id: uuid()

    }
    onTaskFormSubmit(taskObj)
    setTaskText("")
    setTaskCategory("All")
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={taskText} onChange={handleTextChange}/>
      </label>
      <label>
        Category
        <select name="category" value={taskCategory} onChange={handleCategoryChange}>
          {categories.map(category => {
            return <option key={category}>{category}</option>
          })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
