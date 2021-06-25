import React from "react";
import { Col, Row, Jumbotron } from "react-bootstrap";
//import Jumbotron from "./components/Jumbotron";

function NoMatch() {
  return (
    <div>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1>404 Page Not Found</h1>
          </Jumbotron>
        </Col>
      </Row>
    </div>
  );
}

export default NoMatch;
