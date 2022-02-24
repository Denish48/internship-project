import React, { useState } from "react";
import "./AdminPage.css";
import { dt } from "../FireBase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
const AdminLogin = () => {
  //for redirect component:

  const redirect = useNavigate();
  
  const [error, setError] = useState();
  const [a_Email, setA_Email] = useState("");
  const [a_Password, setA_Password] = useState("");
  const [a_Username, setA_Username] = useState("");

  //state for rendering other component:

  const submitHandle = async (e) => {
    e.preventDefault();
    const q = query(
      collection(dt, "AdminRegister"),
      where("email", "==", a_Email),
      where("password", "==", a_Password),
      where("user_name", "==", a_Username)
    );
    const docsSnap = await getDocs(q);
    docsSnap.forEach((doc) => {
      if (doc.exists()) {
        console.log("login");
        redirect("/MovieLinkdata");
      } else {
        console.log("failed");
        setError("You Are Not Admin Member");
      }
    });
  };

  return (
    <>
      <div>
        <div className="login-box">
          <h2>Login</h2>
          <form onSubmit={submitHandle}>
            <div className="user-box">
              <input
                type="text"
                name="username"
                id="username"
                value={a_Username}
                onChange={(e) => setA_Username(e.target.value)}
                autoComplete="off"
                required
              />
              <label>Username</label>
            </div>
            <div className="user-box">
              <input
                type="text"
                name="email"
                id="email"
                value={a_Email}
                onChange={(e) => setA_Email(e.target.value)}
                autoComplete="off"
                required
              />
              <label>Email</label>
            </div>
            <div className="user-box">
              <input
                required
                type="password"
                name="password"
                id="password"
                value={a_Password}
                onChange={(e) => setA_Password(e.target.value)}
                autoComplete="off"
              />
              <label>Password</label>
            </div>

            <button type="submit" class="admin_login_buttoon" onClick={submitHandle}>
              Login
            </button>
          </form>
          <br />
          <h4 style={{ color: "skyblue" }}>{error}</h4>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;
