import React from "react";
import "./AdminPage.css";
import Avatar from "@mui/material/Avatar";

const AdminLogin = () => {
  const GetData = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div>
        <form action="submit" onSubmit={GetData}>
          <div className="login_avatar">
            <Avatar src="/broken-image.jpg" />
          </div>
          <br />
          <label htmlFor="Email">Email:</label>
          <br />
          <input type="text" name="email" value="denish@gmail.com" />
          <br />
          <br />
          <label htmlFor="Password">Enter Password:</label>
          <br />
          <input type="password" name="password" value="hello" id="password" />
          <br />
          <br />
          <button className="login_button">Login</button>
        </form>
      </div>
    </>
  );
};

export default AdminLogin;
