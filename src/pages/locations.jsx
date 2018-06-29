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
                  <b>Smart & Final</b>
                </p>
                <p>
                  This grocery store is easily within walking distance on PCH,
                  walk away from the ocean towards Pacific Coast Highway, turn
                  left and a few small blocks down is the store on the left.
                  <br />
                  <ALink
                    href="https://la.curbed.com/maps/midcentury-modern-architecture-west-coast"
                    target="_blank"
                  >
                    Smart & Final ...
                  </ALink>
                </p>
              </li>
              <li>
                <p>
                  <b>Bristol Farms ...</b>
                </p>
                <p>
                  This is my preferred store, mainly because of the diversity in
                  offerings, good organic produce and fruits, good wine
                  selection, some prepared foods, good pizza dough, etc ...
                  <br />
                  <ALink
                    href="https://www.bristolfarms.com/location/newport-beach/"
                    target="_blank"
                  >
                    Bristol Farms Groceries ...
                  </ALink>
                </p>
              </li>
              <li>
                <p>
                  <b>Whole Foods (now Amazon owned !) ...</b>
                </p>
                <p>
                  This store has some advantages in parking (the structure
                  nearby keeps the car cool), other activities can be combined,
                  Fashion Island is an open shopping area, seating areas around,
                  koi pond, Tesla Store, Apple Store, nice comfortable theatres
                  (cinemas) ... <br />
                  <ALink
                    href="https://www.wholefoodsmarket.com/stores/newport"
                    target="_blank"
                  >
                    Whole Foods @ Fashion Island...
                  </ALink>
                </p>
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col xs="5" sm="5">
            <p>
              <b>Restaurants & Local eateries ...</b>
            </p>
          </Col>
          <Col xs="7" sm="7">
            <p>
              Because of our patio and location, getting some good French bakery
              stuff and sit out on the patio with some great cheeses (French and
              of course Dutch !) has always been my preference over going out
              for breakfast, but if I had to choose a few places they would be
              the top two of this list, the second one 'Eat Chow' has a great
              breakfast, but also a great lunch & dinner:
            </p>
            <ul>
              <li>
                <p>
                  <b>Rose Cafe</b>
                </p>
                <p>
                  Now that my favorite Frech bakery 'Rendez Vous', next to Bank
                  of America down the street on PCH has changed ownership
                  (previous owners were from Toulouse), the quality is just not
                  to my liking ... by all means try it. So I may have to walk a
                  few blocks further to Rose Cafe to pick up my bakery stuff ...<br />
                  <ALink
                    href="https://www.rosebakerycafe.net/#breakfast-and-lunch-corona-del-mar"
                    target="_blank"
                  >
                    Rose Cafe on PCH, 5 min walk ...
                  </ALink>
                </p>
              </li>
              <li>
                <p>
                  <b>Eat Chow ...</b>
                </p>
                <p>
                  It's kind of a ruff sounding name, but it is an excellent
                  little eatery, we sometimes forget about it because it is in
                  an odd location, just off PCH, towards Huntington Beach. The
                  link below takes you to their site (don't go to the one in
                  Costa Mesa).<br />
                  <ALink
                    href="https://www.eatchow.com/newport-beach/"
                    target="_blank"
                  >
                    Eat Chow off PCH in Newport Beach ...
                  </ALink>
                </p>
              </li>
              <li>
                <p>
                  <b>La Sirena Grill ...</b>
                </p>
                <p>
                  Lots of people are accustomed to Mexican food around here.
                  Well, me not so much. However, if I had to make a choice of
                  Mexican, it would definitely be the Serena Grill in Laguna
                  Beach. It's located on PCH, across from the{" "}
                  <ALink
                    href="https://www.montagehotels.com/lagunabeach"
                    target="_blank"
                  >
                    Montage
                  </ALink>{" "}
                  (a supurb resort completely built in California Crafstman
                  Bungalow Style .. it is a great place to wonder around,
                  overlooking the Pacific Ocean and then, head for Serena Grill:<br />
                  <ALink
                    href="http://www.lasirenagrill.com/SouthLaguna/"
                    target="_blank"
                  >
                    La Sirena Grill near Montage on PCH ...
                  </ALink>
                </p>
                <p style={{marginTop: 3}}>
                    There are a tremendous amount of eateries in walking distance from our home, some are pretty good (it's of course a matter of opinion) ... here is a short list, I will put a number next to them to indicate walkability (10= very walkable, 0=need car, 5=maybe car is best):

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
