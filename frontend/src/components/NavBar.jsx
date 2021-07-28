import React, { Fragment, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  Navbar,
  Container,
  Nav,
  Form,
  Button,
  FormControl,
} from "react-bootstrap";

const NavBar = () => {
  const [find, setFind] = useState("");
  const history = useHistory();

  const handleInput = (event) => {
    setFind(event.target.value);
    console.log(find);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    history.push(`/search/${find}`);
  };


  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>Technologies find</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/technologies">Technologies</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="mr-2 tecnologia"
              aria-label="Search"
              value={find}
              onChange={handleInput}
            />
            <Button variant="outline-success" onClick={handleSubmit}>
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
