import Tasks from "./components/Tasks";
import React from "react";
import Login from "./components/login";
import Register from "./components/register";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Logout from "./components/Logout";

function App() {
  return (
    <Router path>
      <Routes>
        <Route path="/Register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Tasks />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </Router>
  );
}

export default App;
