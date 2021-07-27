import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import {Navbar, Container, Nav} from 'react-bootstrap'

const NavBar = () => {
    return(
        <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand>Technologies find</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"  />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link href="/home">Home</Nav.Link>
                <Nav.Link href="/technologies">Technologies</Nav.Link>

                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};

export default NavBar;