import React, { Component } from "react";
import { Grid, Row, Col, Image } from "react-bootstrap";

class BathroomTwo extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col xs="5" sm="5">
            <Image src="/assets/bathroomtwo_1.png" thumbnail />
            <Image src="/assets/bathroomtwo_2.png" thumbnail />
          </Col>
          <Col xs="7" sm="7">
            <p>The bathroom at the end of the hallway is shared by Bedroom Two and Bedroom Three. It has a full bath, shower and sink.
          </p>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default BathroomTwo;