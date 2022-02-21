import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import { dt } from "../FireBase";
import { addDoc, collection } from "firebase/firestore";

const AdminRegister = () => {
  //set usestate for toggle the form:
  const [add_page_Render, setAdd_page_Render] = useState(false);
  const [admin_Username, setAdmin_Username] = useState("");
  const [admin_Email, setAdmin_Email] = useState("");
  const [admin_Password, setAdmin_Password] = useState("");
  const adds = collection(dt, "AdminRegister");

  ///onClick so form will be shown:
  const show_form = () => {
    setAdd_page_Render(true);
  };
  //onclick on Close button from will be disapear:
  const Close_Form = (e) => {
    e.preventDefault();
    setAdd_page_Render(false);
  };
  //get the new admin member data:
  const New_Admin_Handler = (e) => {
    e.preventDefault();
    setAdmin_Username(admin_Username);
    setAdmin_Email(admin_Email);
    setAdmin_Password(admin_Password);
    // console.log(admin_Username, admin_Email, admin_Password);

    const Add_Admin_Data = async () => {
      await addDoc(adds, {
        user_name: admin_Username,
        email: admin_Email,
        password: admin_Password,
      });
    };
    if (Add_Admin_Data()) {
      setAdmin_Email("");
      setAdmin_Password("");
      setAdmin_Username("");
    }
  };

  return (
    <>
      {!add_page_Render && (
        <button className="btn btn-success" onClick={show_form}>
          Add New Admin
        </button>
      )}
      {add_page_Render && (
        <div>
          <h1>Register</h1>
          <Container>
            <form onSubmit={New_Admin_Handler}>
              <label htmlFor="User Name">User Name</label>

              <input
                type="text"
                name="user_name"
                id="user_name"
                value={admin_Username}
                onChange={(e) => setAdmin_Username(e.target.value)}
                class="form-control"
                required
                autoComplete="off"
              />
              <label htmlFor="E-mail">E-mail</label>
              <input
                type="email"
                name="email"
                id="e-mail"
                value={admin_Email}
                onChange={(e) => setAdmin_Email(e.target.value)}
                class="form-control"
                autoComplete="off"
                required
              />
              <label htmlFor="Password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                value={admin_Password}
                onChange={(e) => setAdmin_Password(e.target.value)}
                class="form-control"
                autoComplete="off"
                required
              />
              <button
                className="btn btn-primary"
                style={{ marginRight: "7px", marginTop: "9px" }}
              >
                Register
              </button>
              <button
                className="btn btn-danger"
                onClick={Close_Form}
                style={{ marginTop: "9px" }}
              >
                Close
              </button>
            </form>
          </Container>
        </div>
      )}
    </>
  );
};

export default AdminRegister;
