import React, { Component } from "react";
import { Grid, Row, Col, Image } from "react-bootstrap";

class BedroomTwo extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col xs="5" sm="5">
            <Image src="/assets/bedroom2_1.png" thumbnail />
          </Col>
          <Col xs="7" sm="7">
            <p>
              Bedroom Two has a double bed with a bunk bed configuration on the
              top. It has a large closet and a "smart tv" Samsung TV setup. Use
              the Samsung controller to access the built-in NetFlix and/or
              Amazon Prime apps that are active throughout the house.
            </p>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default BedroomTwo;
