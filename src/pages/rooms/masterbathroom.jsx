import React, { Component } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

class MasterBathroom extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col xs="5" sm="5">
            <Image src="/assets/masterbath_1.png" thumbnail />
          </Col>
          <Col xs="7" sm="7">
            <p>
              The master bathroom has a walk-in shower. Please NOTE:
              unfortunately, the single handle water tap in the shower has the
              cold and hot indicators reversed. The walls are covered in
              American Clay, it has an interesting feature in that it absorbs
              moisture - PLEASE, NEVER TRY TO RUB ON THE CLAY TO DRY IT OFF.
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs="5" sm="5">
            <Image src="/assets/" thumbnail />
            <Image src="/assets/masterbath_2.png" thumbnail />
          </Col>
          <Col xs="7" sm="7">
            <p />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default MasterBathroom;
