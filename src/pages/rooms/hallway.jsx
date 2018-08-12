import React, { Component } from "react";
import { Grid, Row, Col, Image } from "react-bootstrap";

class Hallway extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col xs="5" sm="5">
            <Image src="/assets/hallway1.png" thumbnail />
            <Image src="/assets/hallway2.png" thumbnail />
            <Image src="/assets/hallway3.png" thumbnail />          </Col>
          <Col xs="7" sm="7">
            <p>
              The right hand light switch, inside, to the right of the front
              door, operates the outside light in the evening. We have it on
              from dusk until we retire. The other lights around the outside of
              the house are on a timer and switch on at dusk and automatically
              turn off around midnight. There are two sets of louvre
              doors in the hallway on the right as you walk to the back. Behind
              the first set, we store all the cleaning materials and a few hand
              and larger vacuum cleaners, mostly used by the housekeeping
              ladies. Behind the second set of louvre doors are the washer and
              dryer. The shelfs around the walls in this closet contain numerous
              baskets with extra sets of sheets, household items, a collection
              of different sizes of common alkaline batteries for devices used
              around the house. You will also find a number of beach towels.
              Some soaps are on a roll out basket in between the washer and
              dryer. We use mostly vinegar as a softener, we pour it in the
              container where normally the softener would go in the slide out
              soap dispenser. The larger container on top of the washer has the
              day to day soap that can be dispensed immediately into the pull
              out detergent drawer.
            </p>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Hallway;
