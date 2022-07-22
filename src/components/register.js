import { useState } from "react";
import React from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegitered, setIsLogined] = useState("");
  const [user, setUser] = useState({});

  const onSubmit = async (e) => {
    e.preventDefault();
    const { data } = await axios({
      method: "POST",
      url: "http://localhost:3001/register",
      data: {
        username,
        email,
        password,
      },
    });
    setUser(data);
    // save session id in the cookies
  };
  if (user.password) {
    return <Navigate to="/login" />;
  }

  return (
    <form
      action="/register"
      method="post"
      className="container"
      onSubmit={onSubmit}
    >
      <header className="header">
        <h1>Register</h1>
      </header>
      <div className="form-control">
        <label>Username</label>
        <input
          type="text"
          name="username"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Email</label>
        <input
          type="email"
          name="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Password</label>
        <input
          type="password"
          name="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <input type="submit" disabled={isRegitered} value="Register" className="btn btn-block" />
      <h4>Already have an account</h4><Link to={"/login"}>Login</Link>
    </form>
  );
};

export default Register;
