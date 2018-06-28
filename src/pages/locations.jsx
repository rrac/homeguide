import React, { Component } from "react";
import { Grid, Row, Col, Image } from "react-bootstrap";
import styled from "styled-components";

const ALink = styled.a`
  color: palevioletred;
  text-decoration: none;
  cursor: auto;

  &:hover {
    text-decoration: none;
  }
  &visited {
    text-decoration: none;
  }
  &.selected {
    text-decoration: none;
  }
  &.inactive {
    text-decoration: none;
  }
`;

class Locations extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col xs="5" sm="5">
            <p />
          </Col>
          <Col xs="7" sm="7">
            <p>
              <h4>Locations near and far ... </h4>
            </p>
            <p>
              Below is a list of locations by themes ... architecture, a few of
              our favorite eateries, other eateries, stores, shopping areas we
              like in town (Newport Beach), some live entertainment places,
              concert halls, operas, stage theatre, amusement parks, interesting
              sites, etc ...
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs="5" sm="5">
            <p>
              <b>Architecture</b>
            </p>
          </Col>
          <Col xs="7" sm="7">
            <p>
              Here are a few links of interesting buildings for those of you who
              are interested in architecture. Obviously, particularly this part
              of the country does not have any old buildings. Any old buildings
              from the 1800s were likely destroyed in the many earthquakes that
              have ocurred since. This is a short list but covers a number of
              remarkable structures:
            </p>
            <ul>
              <li>
                <p>
                  <b>Mid-Century Modern Architecture</b>
                </p>
                <p>
                  <ALink
                    href="https://la.curbed.com/maps/midcentury-modern-architecture-west-coast"
                    target="_blank"
                  >
                    West Coast's 15 must-see ...
                  </ALink>
                </p>
              </li>
              <li>
                <p>
                  <b>100 Stunning Architectural Gems of LA ...</b>
                </p>
                <p>
                  <ALink
                    href="http://www.lamag.com/culturefiles/locals-guide-100-architectural-landmarks-los-angeles/"
                    target="_blank"
                  >
                    100 Gems in LA ...
                  </ALink>
                </p>
              </li>
              <li>
                <p>
                  <b>30 Most Remarkable Buildings in LA ...</b>
                </p>
                <p>
                  Most of these building are accessible to the public and/or can
                  be visited ... <br />
                  <ALink
                    href="https://www.timeout.com/los-angeles/attractions/the-30-most-beautiful-buildings-in-los-angeles/"
                    target="_blank"
                  >
                    30 Remarkable buildings in LA ...
                  </ALink>
                </p>
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col xs="5" sm="5">
            <p>
              <b>Stores</b>
            </p>
          </Col>
          <Col xs="7" sm="7">
            <p>
              These are mostly grocery stores, places we shop for out day to day
              food items, household items, wine, etc ... Some are in walking
              distance, some are maybe a little further not necessarily because
              of distance but bringing back bags of stuff is not always
              comfortable when it gets a little hotter (... you can hear in my
              tone that we are spoiled):
            </p>
            <ul>
              <li>
                <p>
                  <b>Mid-Century Modern Architecture</b>
                </p>
                <p>
                  <ALink
                    href="https://la.curbed.com/maps/midcentury-modern-architecture-west-coast"
                    target="_blank"
                  >
                    West Coast's 15 must-see ...
                  </ALink>
                </p>
              </li>
              <li>
                <p>
                  <b>100 Stunning Architectural Gems of LA ...</b>
                </p>
                <p>
                  <ALink
                    href="http://www.lamag.com/culturefiles/locals-guide-100-architectural-landmarks-los-angeles/"
                    target="_blank"
                  >
                    100 Gems in LA ...
                  </ALink>
                </p>
              </li>
              <li>
                <p>
                  <b>30 Most Remarkable Buildings in LA ...</b>
                </p>
                <p>
                  Most of these building are accessible to the public and/or can
                  be visited ... <br />
                  <ALink
                    href="https://www.timeout.com/los-angeles/attractions/the-30-most-beautiful-buildings-in-los-angeles/"
                    target="_blank"
                  >
                    30 Remarkable buildings in LA ...
                  </ALink>
                </p>
              </li>
            </ul>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Locations;
