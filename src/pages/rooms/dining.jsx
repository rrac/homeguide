import React, { Component } from "react";
import { Grid, Row, Col, Image } from "react-bootstrap";

class Dining extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col xs="5" sm="5">
            <Image src="/assets/diningarea.png" thumbnail />
          </Col>
          <Col xs="7" sm="7">
            <p>
              The dinner nook has a sliding door which we normally keep open
              after the sun has passed, around noon, particularly in the summer.
              It starts to cool off because of the shade in the alley between
              the buildings, which often creates air to move through and has a
              cooling effect.
            </p>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Dining;
