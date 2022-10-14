import { useState } from "react";
import React from "react";
import {
  Link,
  useNavigate,
} from "react-router-dom";
import api from "../shared/api";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()

  const onSubmit = async (e) => {
    e.preventDefault();
   try {
    const {status} = await api(
      "POST",
      "/register",
      {
        username,
        email,
        password,
      },
    );
    if(status==201) navigate('/login');
     
   } catch (error) {
    alert("Email already used");
   }
  };

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

      <input
        type="submit"
        value="Register"
        className="btn btn-block"
      />
      <h4>Already have an account</h4>
      <Link to={"/login"}>Login</Link>
    </form>
  );
};

export default Register;
