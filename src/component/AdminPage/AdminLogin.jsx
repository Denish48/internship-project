import React, { useState } from "react";
import "./AdminPage.css";
import Avatar from "@mui/material/Avatar";

const AdminLogin = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  let name, value;
  const UserData = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  console.log(user);
  const getData = (e) => {
    e.preventDefault();
    setUser({ email: "", password: "" });
  };
  return (
    <>
      <div>
        <form action="submit" method="POST">
          <div className="login_avatar">
            <Avatar src="/broken-image.jpg" />
          </div>
          <br />
          <label htmlFor="Email">Email:</label>
          <br />
          <input
            type="text"
            id="email"
            name="email"
            value={user.email}
            onChange={UserData}
          />
          <br />
          <br />
          <label htmlFor="Password">Enter Password:</label>
          <br />
          <input
            type="password"
            name="password"
            id="password"
            value={user.password}
            onChange={UserData}
          />
          <br />
          <br />
          <button className="login_button" onClick={getData}>
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default AdminLogin;
