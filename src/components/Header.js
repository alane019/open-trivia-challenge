import React from "react";
import { Navbar } from "react-bootstrap";

import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
  return (
      <Navbar id="nav" expand="lg"  variant="dark">
        <div>
          <LinkContainer to="/">
            <Navbar.Brand id="nav-text" className="mr-auto">React Trivia Challenge</Navbar.Brand>
          </LinkContainer>
        </div>
      </Navbar>
  );
};
export default Header;
