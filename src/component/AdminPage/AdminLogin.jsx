import React, { useState } from "react";
import "./AdminPage.css";
import { useNavigate } from "react-router-dom";
const AdminLogin = () => {
  //for redirect component:
  const redirect = useNavigate();
  const [incPassword, setIncPassword] = useState("");

  //usestate for get value on change:
  const [user, setUser] = useState({
    password: "",
  });

  let name, value;
  //value handler function:
  const pass_UserData = async (e) => {
    name = e.target.name;
    value = e.target.value;
   await setUser({ ...user, [name]: value });
  };

  //subit handler function:
  const submit_getData = (e) => {
    e.preventDefault();
    console.log("user", user);
    //check the condition for password match and redirect to other component:
    // user?.password === "123456"
    //   ? redirect("/mdata")
    //   : setIncPassword("Incorrect Password");

    if (user?.password === "123") {
      redirect("/mdata");
    }
    if (user?.password === "") {
      setIncPassword("Enter Password");
    } else {
      setIncPassword("Incorrecct password");
    }
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
          <br />
          <h4 style={{ color: "skyblue" }}>{incPassword}</h4>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;
