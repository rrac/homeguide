import React, { Component } from "react";
import { Grid, Row, Col, Image } from "react-bootstrap";

class MasterBathroom extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col xs="5" sm="5">
            <Image src="/assets/masterbath_1.png" thumbnail />
          </Col>
          <Col xs="7" sm="7">
            <p>
              The master bathroom has a walk-in shower, please note that the
              single handle water tap in the shower indicates cold but will be
              hot, and hot will be cold -- if you set the lever pointing to 3pm
              for the US (15hr00 hrs for EU) it should be fine, adjust to your
              liking. We always switch on both light switches in the
              bathroom, one operates the lights above the sinks, the other
              switch the remaining lights and the fan. Definitely use the fan
              when showering, it can get quite steamy in there ... don't worry
              if the walls get splashed on, the walls are covered in American
              Clay, the moisture will just absorb into the clay - PLEASE, NEVER TRY TO RUB ON
              THE CLAY TO DRY IT OFF.
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs="5" sm="5">
            <Image src="/assets/" thumbnail />
            <Image src="/assets/masterbath_2.png" thumbnail />
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

export default MasterBathroom;
