import React,{useState} from "react";
import { Navbar, Container, NavLink } from "react-bootstrap";
import HomeTwoToneIcon from "@mui/icons-material/HomeTwoTone";
import SupervisorAccountTwoToneIcon from "@mui/icons-material/SupervisorAccountTwoTone";
import InfoTwoToneIcon from "@mui/icons-material/InfoTwoTone";
import { Link } from "react-router-dom";
import "../Header/NavBar.css";
import "./demo.css"
const NavBar = () => {


  return (
    <>
      <div className="bottom-header">
        <Container>
          <Navbar>
            <div className="logo">
              <Navbar.Brand as={Link} to="/" style={{ color: "white" }}>
                <h1> Movies </h1>
              </Navbar.Brand>
            </div>
            <div className="main-navigation">
              <NavLink as={Link} to="/">
                <HomeTwoToneIcon /> home
              </NavLink>
              <NavLink as={Link} to="/AboutUS">
                <InfoTwoToneIcon /> Contact US
              </NavLink>
              <NavLink as={Link} to="/AdminLogin">
                <SupervisorAccountTwoToneIcon /> admin
              </NavLink>
              
            </div>
          </Navbar>
        </Container>
      </div>

    </>
  );
};
export default NavBar;
