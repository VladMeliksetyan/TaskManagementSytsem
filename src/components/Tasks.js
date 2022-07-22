import Task from "./Task";
import React, { useState, useEffect } from "react";
import Header from "./Header";
import api from "../shared/api";
import AddTask from "./AddTask";
import Logout from "./Logout";

const Tasks = () => {
  const [showAddTask, setShowAddTask] = useState();
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    (async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    })();
  }, []);

  // fetch tasks
  const fetchTasks = async () => {
    const { data } = await api("GET", "/tasks");

    return data;
  };

  // delete task

  const deleteTask = (task_id) => {
    api("delete", "/removeTask", { task_id });

    setTasks([...tasks.filter((task) => task.task_id !== task_id)]);
  };

  // add task

  const addTask = async (task) => {
    setTasks([...tasks, task]);
  };

  // reminder

  const toggleReminder = (reminder, task_id) => {
    api("put", "/updateReminder", { reminder: !reminder, task_id });
    setTasks([
      ...tasks.map((task) =>
        task.task_id === task_id ? { ...task, reminder: !task.reminder } : task
      ),
    ]);
  };

  return (
    <div className="container">
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0
        ? tasks.map((task) => (
            <Task
              key={task.task_id}
              task={task}
              onDelete={deleteTask}
              onToggle={toggleReminder}
            />
          ))
        : "no tasks to show"}
      <Logout />
    </div>
  );
};

export default Tasks;
