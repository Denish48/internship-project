import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import HomeTwoToneIcon from "@mui/icons-material/HomeTwoTone";
import SupervisorAccountTwoToneIcon from "@mui/icons-material/SupervisorAccountTwoTone";
import InfoTwoToneIcon from "@mui/icons-material/InfoTwoTone";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" sticky="top">
        {/* import router link from router */}
        <Navbar.Brand as={Link} to="/">
          Movies
        </Navbar.Brand>
        <Container>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              <HomeTwoToneIcon sx={{ fontSize: 18 }} />
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/AdminLogin">
              <SupervisorAccountTwoToneIcon sx={{ fontSize: 18 }} />
              Admin
            </Nav.Link>
            <Nav.Link as={Link} to="/AboutUs">
              <InfoTwoToneIcon sx={{ fontSize: 18 }} />
              About Us
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
    </>
  );
};

export default NavBar;
