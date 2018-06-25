import React, { Component } from "react";
import { Grid, Row, Col, Image } from "react-bootstrap";

class Access extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col xs="5" sm="5">
            <Image src="/assets/access_1.png" thumbnail />
          </Col>
          <Col xs="7" sm="7">
            <p>
              As you open the gate, walk right of the staircase going up to gain
              access to the front door.
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs="5" sm="5">
            <Image src="/assets/lock.png" thumbnail />
          </Col>
          <Col xs="7" sm="7">
            <p>
              As you approach the front door, you will notice that there is a
              black/shiny lock that will be completely black. You will only
              notice the small silver dot with the name 'Yale' in it. Touch the
              silver logo and the touch screen will light up and show the keypad
              numbers. Enter the 5 last digits of your mobile phone number (for
              some guests it might be their landline number). Finish by pressing
              the check-mark in the lower right corner. The door will unlock
            </p>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Access;
