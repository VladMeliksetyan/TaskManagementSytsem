import { useState, useEffect } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import React from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./components/login";
import Register from "./components/register";
import api from "./shared/api";

function App() {
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
    // const res = await fetch("http://localhost:3001/tasks");
    // const data = await res.json();
    const res = await api("GET", "/tasks")
    const data = await res.json();
    
    return data;
  };

  // delete task

  const deleteTask = (task_id) => {
    axios({
      method: "delete",
      url: "http://localhost:3001/removeTask",
      data: {
        task_id,
      },
    });

    setTasks([...tasks.filter((task) => task.task_id !== task_id)]);
  };

  // add task

  const addTask = async (task) => {
    setTasks([...tasks, task]);
  };

  // reminder

  const toggleReminder = (reminder, task_id) => {
    axios({
      method: "put",
      url: "http://localhost:3001/updateReminder",
      data: {
        reminder: !reminder,
        task_id,
      },
    });
    setTasks([
      ...tasks.map((task) =>
        task.task_id === task_id ? { ...task, reminder: !task.reminder } : task
      ),
    ]);
  };

  return (
    <Router path>
      <Routes>
        <Route path="/Register" element={<Register/>} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <div className="container">
              <Header
                onAdd={() => setShowAddTask(!showAddTask)}
                showAdd={showAddTask}
              />
              {showAddTask && <AddTask onAdd={addTask} />}
              {tasks.length > 0 ? (
                <Tasks
                  tasks={tasks}
                  onDelete={deleteTask}
                  onToggle={toggleReminder}
                />
              ) : (
                "no tasks to show"
              )}
            </div>
          }
        />
        <Route path="/logout" element={<Link to="/login">Log out</Link>} />
      </Routes>
    </Router>
  );
}

export default App;
