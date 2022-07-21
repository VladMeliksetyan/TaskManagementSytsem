import { useState } from "react";
import React from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogined, setIsLogined] = useState("");
  const [user, setUser] = useState({});

  const onSubmit = async (e) => {

    e.preventDefault();
    console.log(111111111, email,password);
    const { data } = await axios({
      method: "POST",
      url: "http://localhost:3001/login",
      data: {
        email,
        password,
      },
    });
    setUser(data)
    // save session id in the cookies
  };

  if (user.session) {
    return <Navigate to="/" />;
  }

  return (
    <form
      action="../..post"
      method="post"
      className="container"
      onSubmit={onSubmit}
    >
      <header className="header">
        <h1>Login</h1>
      </header>
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

        <input
          type="submit"
          disabled={isLogined}
          value="Login"
          className="btn btn-block"
        />
    </form>
  );
};
export default Login;
