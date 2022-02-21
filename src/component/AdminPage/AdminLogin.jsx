import React, { useState, useEffect } from "react";
import "./AdminPage.css";
import { dt } from "../FireBase";
import { collection, getDocs } from "firebase/firestore";
// import { useNavigate } from "react-router-dom";
import MovieLinkData from "../MovieData/MovieLinkData";
const AdminLogin = () => {
  //for redirect component:
  // const redirect = useNavigate();

  const [incPassword, setIncPassword] = useState("");
  const [a_Email, setA_Email] = useState("");
  const [a_Password, setA_Password] = useState("");
  //state for rendering other component:
  const [render_comp, setRender_comp] = useState(false);

  const adds = collection(dt, "AdminRegister");

  const [admin_data, setAdmin_data] = useState([]);
  // console.log(admin_data);
  //usestate for get value on change:

  //value handler function:

  //subit handler function:
  const submit_Data = (e) => {
    e.preventDefault();
    setA_Email(a_Email);
    setA_Password(a_Password);
    console.log(a_Email)
    console.log(a_Password);

    // check the condition for password match and redirect to other component:

    // if (
    //   (a_Password === "123" && a_Email === "denish@gmail.com") ||
    //   (a_Password === "123" && a_Email === "bhautik@gmail.com")
    // ) {
    //   //set other state for conditional rendering:
    //   setRender_comp(true);
    // } else if (a_Password === "") {
    //   setIncPassword("Enter Password");
    // } else if (a_Email === "") {
    //   setIncPassword("Enter Email");
    // } else {
    //   setIncPassword("You Are Not Admin Member");
    // }
  };

  const GetAdminDetail = async () => {
    const data = await getDocs(adds);
    await setAdmin_data(data.docs.map((doc) => ({ ...doc.data() })));
    console.log("this is fatching data", data);
  };

  useEffect(() => {
    GetAdminDetail();
  }, [])

    // (admin_data?.email === a_Email && admin_data?.password === a_Password)
    // ? setRender_comp(true)
    // : setIncPassword("You Are Not Admin Member");

  return (
    <>
      {admin_data.map((ele) => {
        return (
          <>
            <h2>{ele.email}</h2>
            <h2>{ele.user_name}</h2>
            <h2>{ele.password}</h2>
          </>
        );
      })}
      {
        //render_comp false so this component is rendering:
        !render_comp && (
          <div>
            <div className="login-box">
              <h2>Login</h2>
              <form onSubmit={submit_Data} method="GET">
                <div className="user-box">
                  <input
                    type="text"
                    name="email"
                    id="email"
                    value={a_Email}
                    onChange={(e) => setA_Email(e.target.value)}
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
                    value={a_Password}
                    onChange={(e) => setA_Password(e.target.value)}
                    autoComplete="off"
                  />
                  <label>Password</label>
                </div>
                <a href="/" onClick={submit_Data}>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  Submit
                </a>
                <button type="submit" onClick={submit_Data} hidden>
                  submit
                </button>
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
