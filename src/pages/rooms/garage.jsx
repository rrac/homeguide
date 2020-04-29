import React, { Component } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

class Garage extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col xs="5" sm="5">
            <Image src="/assets/garage_1.png" thumbnail />
            <Image src="/assets/garage_2.png" thumbnail />
          </Col>
          <Col xs="7" sm="7">
            <p>
              Access to the garage is through Bedroom Three or from the alley
              behing our home. It is a tandem garage, so passengers have to exit
              the car prior to parking. Parking in the garage can be a little
              tricky. The cabinetry has been configured to allow the driver's
              door from either car to open their first bracket without hitting
              the cabinet doors. The cabinet door also open fully without
              hitting any of the cars, if you parked sufficiently close to the
              passenger side wall. An infra red beam at each car locations
              guides you to park with ease (well, maybe some slow practice might
              be required initially).
            </p>
            <p>
              When stepping down into the garage from Bedroom Three, the cabinet
              closest to you is an overflow pantry. Mostly dry goods - toilet
              paper, paper towels, canned good, wine, etc ... Basically
              non-perishable consumable products for which no storage is
              available in the house.
            </p>
            <p>
              To your left as you step down, there is a double door refrigerator
              with a large freezer drawer. We mostly keep cheeses, butter, water
              and/or refreshments in there when the kitchen regrigerator gets
              overloaded.
            </p>
            <p>
              The door to the garage has a cat-door built in. It allows Ruby to
              get to dry food and her cat box.
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Garage;
