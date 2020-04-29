import React, { Component } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

class Dining extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col xs="5" sm="5">
            <Image src="/assets/diningarea.png" thumbnail />
          </Col>
          <Col xs="7" sm="7">
            <p>
              The dining nook has a table that seats four. On the north side of
              the room, we have a sliding door which we normally keep open after
              the sun has passed, around noon, particularly in the summer. It
              starts to cool off because of the shade in the alley between the
              buildings, which often creates air to move through and has a
              cooling effect.
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Dining;
