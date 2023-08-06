import React from "react";
import Task from "./Task";

function TaskList(props) {
  return (
    <div className="tasks">
      {props.tasks.map((task) => (
        <Task
          key={task.text}
          text={task.text}
          category={task.category}
          onDelete={() => props.onDeleteTask(task.text)}
        />
      ))}
    </div>
  );
}

export default TaskList;
