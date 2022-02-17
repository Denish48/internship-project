import React, { useState } from "react";
import "./AdminPage.css";

const AdminLogin = () => {
  //usestate for get value on change:
  const [user, setUser] = useState({
    password: "",
  });

  let name, value;
  //value handler function:
  const pass_UserData = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  //subit handler function:
  const submit_getData = (e) => {
    e.preventDefault();
    console.log("user", user);
    //check the condition for password match:
    user?.password === "123456" ? alert("Sucesss") : alert("try again");
  };

  return (
    <>
      <div>
        <div className="login-box">
          <h2>Login</h2>
          <form>
            <div className="user-box">
              <input
                type="text"
                name="email"
                id="email"
                value="denish@gmail.com"
                autoComplete="off"
              />
              <label>Email</label>
            </div>
            <div className="user-box">
              <input
                required
                type="password"
                name="password"
                id="password"
                value={user.password}
                onChange={pass_UserData}
                autoComplete="off"
              />
              <label>Password</label>
            </div>
            <a href="#" onClick={submit_getData}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Submit
            </a>
          </form>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;
