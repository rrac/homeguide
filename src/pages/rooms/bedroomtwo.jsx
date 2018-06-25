import React, { Component } from "react";
import { Grid, Row, Col, Image } from "react-bootstrap";

class BedroomTwo extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col xs="5" sm="5">
            <Image src="/assets/" thumbnail />
            <Image src="/assets/" thumbnail />
          </Col>
          <Col xs="7" sm="7">
            <p>
          </p>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default BedroomTwo;