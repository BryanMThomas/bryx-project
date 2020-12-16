import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
  .navbar {
    background-color: #8B0000;
  }
  .navbar-brand,
  .navbar-nav .nav-link {
    color: #efefef;
    font-size: 1.8em;
    &:hover {
      color: black;
    }
  }
`;
export const NavigationBar = () => {
  return (
    <Styles>
      <Navbar expand="lg">
        <Navbar.Brand href="/">Bryx</Navbar.Brand>
        <Navbar.Toggle aria-controls= "basic-navbar-nav"/>
        <Navbar.Collapse id = "basic-navbar-nav">
            <Nav className = "ml-auto">
                <Nav.Item><Nav.Link href ="/">Search</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href ="/listings">Listings</Nav.Link></Nav.Item>
            </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styles>
  );
};