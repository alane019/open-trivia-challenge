import React from "react";
import { Navbar, Container } from "react-bootstrap";

import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
  return (
    <header>
      <Navbar expand="lg" bg="dark" variant="dark" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand className="mr-auto">React Trivia Game</Navbar.Brand>
          </LinkContainer>
        </Container>
      </Navbar>
    </header>
  );
};
export default Header;
