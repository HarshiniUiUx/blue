import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { LuSearch, LuUser2 } from "react-icons/lu";
import { BsHandbag } from "react-icons/bs";
import { Link } from "react-router-dom";

function Navbarblue() {
  return (
    <>
      <Navbar expand="lg" className=" container sticky-top bg-light">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <li className="nav-item list-unstyled">
            <Link to="/" className="nav-link">
              <img src={require("../../assets/images/logo.png")} className="d-inline-block align-top w-100" alt="logo" />
            </Link>
          </li>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto fw-bold">
              <li className="nav-item">
                <Link to="/home" className="nav-link">
                  ROASTED COFFEE
                </Link>
              </li>
              <Nav.Link href="#link" className="px-3">OFFERS</Nav.Link>
              <Nav.Link href="#link" className="px-3">READY TO BREW</Nav.Link>
              <li className="nav-item">
                <Link to="/equipment" className="nav-link">
                  EQUIPMENT
                </Link>
              </li>
              <Nav.Link href="#link" className="px-3">OTHERS</Nav.Link>
              <Nav.Link href="#link" className="px-3">LEARN</Nav.Link>
              <Nav.Link href="#link" className="px-3">ABOUT US</Nav.Link>

            </Nav>
          </Navbar.Collapse>
          <Nav className="">
            <Nav.Link href="#link"><Button variant="dark text-info fw-bold">GET THE APP</Button></Nav.Link>
            <Nav.Link href="#link"><LuSearch className="fs-3" /></Nav.Link>
            <Nav.Link href="#link"><LuUser2 className="fs-3" /></Nav.Link>
            <Nav.Link href="#link"><BsHandbag className="fs-3" /></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbarblue;