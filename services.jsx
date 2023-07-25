import React, { Component } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { FaCode, FaPalette, FaMicrochip, FaServer } from "react-icons/fa";

class Services extends Component {
  state = {};

  render() {
    return (
      <>
        <section id="services">
          <div id="services-content">
            <div className="row">
              <div className="col-md-6 px-5 py-3 w-100">
                <div>
                  <h1>What I do?</h1>
                </div>
              </div>
            </div>
            <div className="row">
              <Col md={6}>
                <Card>
                  <Card.Body>
                    <Card.Title as="h3">
                      <FaCode /> Web Development
                    </Card.Title>
                    <Card.Text>
                      With technical skill, I create captivating websites,
                      utilizing libraries and frameworks for dynamic and static
                      content development.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6}>
                <Card>
                  <Card.Body>
                    <Card.Title as="h3">
                      <FaPalette /> Web Design
                    </Card.Title>
                    <Card.Text>
                      With a keen eye for design, I can craft visually appealing
                      websites using libraries or by creating custom designs.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </div>
            <div className="row">
              <Col md={6}>
                <Card>
                  <Card.Body>
                    <Card.Title as="h3">
                      <FaMicrochip /> IoT Projects
                    </Card.Title>
                    <Card.Text>
                      I am experienced in working with agile methodologies, such
                      as sprints and user stories, to ensure efficient project
                      management and deliver high-quality results, including
                      Raspberry Pi integration for IoT projects.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6}>
                <Card>
                  <Card.Body>
                    <Card.Title as="h3">
                      <FaServer /> Server Management
                    </Card.Title>
                    <Card.Text>
                      Proficient in server setup and user management in Windows
                      and Linux, I handle tasks such as Apache configuration,
                      backups, bash scripting, service administration, and more.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </div>
          </div>
        </section>
        <div className="seperated"></div>
      </>
    );
  }
}

export default Services;
