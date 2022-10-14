import { useState } from "react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../shared/api";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const onSubmit = async (e) => {
    e.preventDefault();

    const { data } = await api("POST", "/login", { email, password });
    localStorage.setItem("token", data.accesstoken);
    navigate("/");
  };

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

      <input type="submit" value="Login" className="btn btn-block" />
      <h4>If you do not have an account </h4>
      <Link to={"/register"}>Register</Link>
    </form>
  );
};
export default Login;
