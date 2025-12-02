import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import bcrypt from "bcryptjs";

export default function Bcrypt_Register() {
  const navigate = useNavigate();
  const [mailCheck, setMailCheck] = useState(false);

  const [data, setData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("storedData")) || []
  );

  // handle input
  function handleChange(e) {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  }

  // check email exists
  function emailCheck() {
    const exists = users.some((u) => u.email === data.email);
    setMailCheck(exists);
  }

  // submit
  function handleSubmit(e) {
    e.preventDefault();

    if (mailCheck) {
      alert("Email already exists!");
      return;
    }

    const hashedPassword = bcrypt.hash(data.password, 10);

    const userData = {
      ...data,
      password: hashedPassword,
    };

    setUsers([...users, userData]);

    setData({
      name: "",
      username: "",
      email: "",
      password: "",
    });

    navigate("/login");
  }

  useEffect(() => {
    localStorage.setItem("storedData", JSON.stringify(users));
  }, [users]);

  return (
    <>
      <h2>Register Page</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={data.name}
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="text"
          name="username"
          placeholder="Username"
          value={data.username}
          onChange={handleChange}
          required
        />
        <br /><br />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={data.email}
          onChange={handleChange}
          onBlur={emailCheck}     
          required
        />
        <br />

        {mailCheck && (
          <span style={{ color: "red" }}>Email already exists</span>
        )}
        <br /><br />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={data.password}
          onChange={handleChange}
          required
        />
        <br /><br />

        <button type="submit">Register</button>

        <br /><br />
        <p>
          <Link to="/login">Already have an account? Login</Link>
        </p>
      </form>
    </>
  );
}
