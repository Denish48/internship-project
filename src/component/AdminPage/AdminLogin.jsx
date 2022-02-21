import React, { useState } from "react";
import "./AdminPage.css";
// import { dt } from "../FireBase";
// import { collection, getDocs } from "firebase/firestore";
// import { useNavigate } from "react-router-dom";
import MovieLinkData from "../MovieData/MovieLinkData";
const AdminLogin = () => {
  //for redirect component:
  // const redirect = useNavigate();

  const [incPassword, setIncPassword] = useState("");
  //state for rendering other component:
  const [render_comp, setRender_comp] = useState(false);

  // const adds = collection(dt, "AdminRegister");

  // const [admin_data, setAdmin_data] = useState([])
  // console.log(admin_data);
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

    // check the condition for password match and redirect to other component:

    if (
      (user?.password === "123" && user?.email === "denish@gmail.com") ||
      (user?.password === "123" && user?.email === "bhautik@gmail.com")
    ) {
      //set other state for conditional rendering:
      setRender_comp(true);
    } else if (user?.password === "") {
      setIncPassword("Enter Password");
    } else if (user?.email === "") {
      setIncPassword("Enter Email");
    } else {
      setIncPassword("You Are Not Admin Member");
    }
  };

  // const GetAdminDetail = async () => {
  //   const data = await getDocs(adds);
  //   await setAdmin_data(data.docs.reverse().map((doc) => ({ ...doc.data() })));
  //   console.log("this is fatching data",data);
  // }

  //   if (admin_data?.email === user.email) {
  //     setRender_comp(true);
  //   }
  //   else {
  //     setIncPassword("You Are Not Admin Member");
  //   }
  // useEffect(() => {
  //   GetAdminDetail()
  // }, [])

  return (
    <>
      {
        //render_comp false so this component is rendering:
        !render_comp && (
          <div>
            <div className="login-box">
              <h2>Login</h2>
              <form onSubmit={submit_Data}>
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
