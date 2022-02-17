import React, { useState } from "react";
import "./AdminPage.css";
// import { useNavigate } from "react-router-dom";
import MovieLinkData from "../MovieData/MovieLinkData";
const AdminLogin = () => {
  //for redirect component:
  // const redirect = useNavigate();
  const [incPassword, setIncPassword] = useState("");
  const [render_comp, setRender_comp] = useState(false);

  //usestate for get value on change:
  const [user, setUser] = useState({
    password: "",
    email: "",
  });

  let name, value;
  //value handler function:
  const pass_UserData = async (e) => {
    name = e.target.name;
    value = e.target.value;
    await setUser({ ...user, [name]: value });
  };

  //subit handler function:
  const submit_Data = (e) => {
    e.preventDefault();
    console.log("user", user);
    //check the condition for password match and redirect to other component:

    if (user?.password === "123" && user?.email === "denish@gmail.com") {
      //set other state for conditional rendering:
      setRender_comp(true);
    }
    if (user?.password === "") {
      setIncPassword("Enter Password");
    }
    if (user?.email === "") {
      setIncPassword("Enter Email");
    } else {
      setIncPassword("Incorrecct Password or Email");
    }
  };

  return (
    <>
      {
        //render_comp false so this component is rendering:
        !render_comp && (
          <div>
            <div className="login-box">
              <h2>Login</h2>
              <form>
                <div className="user-box">
                  <input
                    type="text"
                    name="email"
                    id="email"
                    value={user.email}
                    onChange={pass_UserData}
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
                <a href="/mdata" onClick={submit_Data}>
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
        )
      }
      {
        //render_comp is true this component is rendering:
        render_comp && <MovieLinkData />
      }
    </>
  );
};

export default AdminLogin;
