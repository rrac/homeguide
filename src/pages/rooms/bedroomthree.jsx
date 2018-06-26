import React, { Component } from "react";
import { Grid, Row, Col, Image } from "react-bootstrap";

class BedroomThree extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col xs="5" sm="5">
            <Image src="/assets/bedroom3_1.png" thumbnail />
          </Col>
          <Col xs="7" sm="7">
            <p>
              Bedroom Three sleeps two. What is initially visible is a "day-bed"
              that has a trundle underneath, that you can pull out.
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs="5" sm="5">
            <Image src="/assets/bedroom3_2.png" thumbnail />
          </Col>
          <Col xs="7" sm="7">
            <p>
              It has a small sitting area. The door accesses the hallway and is
              across from Bedroom Two. Adjacent to Bathroom Two. The second door
              in the room provides access to the garage. It has a cat-door for
              Ruby. That is where the cat box is located and dry food for weeks.
              We ask that you leave the door to the hallway ajar so Ruby can get
              to the garage at all times, else possible mayhem may ensue.
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs="5" sm="5">
            <Image src="/assets/bedroom3_3.png" thumbnail />
          </Col>
          <Col xs="7" sm="7">
            <p>
              Bedroom Three also functions as a Den/Small Office and is fully
              equipped with computer and scanning system. It has a great Bose
              sound system. The guest account is always active. When you log
              out, all files, cache, etc ... is automatically deleted for your
              convenience (An Apple MacOS feature).
            </p>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default BedroomThree;
