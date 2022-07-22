import Task from "./Task";
import React from "react";
import Logout from "./Logout";


const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task
          key={task.task_id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
      <Logout/>
    </>
    
    
  );
};

export default Tasks;
