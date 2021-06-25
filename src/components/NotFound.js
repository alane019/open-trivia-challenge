import React from "react";
import { Col, Row, Container, Jumbotron} from "react-bootstrap";
//import Jumbotron from "./components/Jumbotron";

function NoMatch() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1>404 Page Not Found</h1>
            <br></br>
            <h1>
              <img
                aria-label="404-image"
                alt="404-lost"
                src="https://media.tenor.co/images/9f2d19ec75ddc830ba276cb24190e4b6/raw"
              ></img>
            </h1>
            <br></br>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}

export default NoMatch;
