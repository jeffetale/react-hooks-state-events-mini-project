// NewTaskForm.js
import React, { useState } from "react";

function NewTaskForm(props) {
  const [formData, setFormData] = useState({
    text: "",
    category: "Code"
  });

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.onTaskFormSubmit(formData);
    setFormData({
      text: "",
      category: "Code"
    });
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={handleChange} value={formData.text} />
      </label>
      <label>
        Category
        <select name="category" onChange={handleChange} value={formData.category}>
          {props.categories.filter(category => category !== "All").map(category => (
            <option key={category}>{category}</option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
