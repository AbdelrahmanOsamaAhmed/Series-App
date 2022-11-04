import React, { useRef } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
import "./NavigationBar.css";

export default function NavigationBar() {
  const navigate = useNavigate();
  const searchRef = useRef();
  return (
    <div style={{ color: "#fff" }}>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand>
            <Link to={"/"} className="link">
              <i className="fa-solid fa-tv"></i> Series
            </Link>
          </Navbar.Brand>
          <Form
            className="d-flex"
            onSubmit={(e) => {
              e.preventDefault();
              if (searchRef.current.value === "") {
                alert("EMPTY SEARCH");
                return;
              }
              navigate(`/search/${searchRef.current.value}`);
              searchRef.current.value = "";
            }}
          >
            <Form.Control
              ref={searchRef}
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-danger" type="submuit">
              Search
            </Button>
          </Form>
          <Button variant="danger" onClick={() => navigate("/favourites")}>
            Favourites
          </Button>
        </Container>
      </Navbar>
    </div>
  );
}
