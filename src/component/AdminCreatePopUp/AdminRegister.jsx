import React, { useState } from "react";
import Container from "react-bootstrap/Container";

const AdminRegister = () => {
  const [add_page_Render, setAdd_page_Render] = useState(false);

  const show_form = () => {
    setAdd_page_Render(true);
  };

  const Close_Form = (e) => {
    e.preventDefault();
    setAdd_page_Render(false);
  };

  const New_Admin_Handler = (e) => {
    e.preventDefault();
  };

  return (
    <>
      {!add_page_Render && (
        <button className="btn btn-success" onClick={show_form}>
          Add New Admin
        </button>
      )}
      {add_page_Render && (
        <>
          <h1>Register</h1>
          <Container>
            <form onSubmit={New_Admin_Handler}>
              <label htmlFor="">User Name</label>

              <input
                type="text"
                name="user_name"
                id="user_name"
                class="form-control"
                required
                autoComplete="off"
              />
              <label htmlFor="">E-mail</label>
              <input
                type="text"
                name="e-mail"
                id="e-mail"
                class="form-control"
                autoComplete="off"
                required
              />
              <label htmlFor="">Password</label>
              <input
                type="text"
                name="password"
                id="password"
                class="form-control"
                autoComplete="off"
                required
              />
              <button className="btn btn-primary">Register</button>
              <button className="btn btn-danger" onClick={Close_Form}>
                Close
              </button>
            </form>
          </Container>
        </>
      )}
    </>
  );
};

export default AdminRegister;
