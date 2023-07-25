import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

class Footer extends Component {
  render() {
    return (
      <footer>
        <Container fluid>
          <Row>
            <Col className="text-center">
              <p className="text-white">
                &copy; {new Date().getFullYear()} Bešić Omar. All rights are
                reserved.
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}

export default Footer;
