import React, { Component } from "react";
import { Grid, Row, Col, Image } from "react-bootstrap";
import styled from "styled-components";

const ALink = styled.a`
  color: palevioletred;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: none;
  }
  &:visited {
    color: palevioletred;
    text-decoration: none;
  }
  &:selected {
    color: palevioletred;
    text-decoration: none;
  }
  &:inactive {
    color: palevioletred;
    text-decoration: none;
  }
  &:active {
    color: palevioletred;
    text-decoration: none;
  }
`;

const PwSpace = styled.p`
  margin-top: 3em;
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
              These are mostly grocery stores, places we shop for our day to day
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
                  it is located right at Fashion Island, which is an open air
                  shopping area, it seating areas around, koi pond, Tesla Store,
                  Apple Store, nice comfortable theatres (cinemas) ... <br />
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
                  few blocks further to Rose Cafe to pick up my bakery stuff ...
                  <br />
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
                  Costa Mesa).
                  <br />
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
                  Mexican, it would definitely be La Sirena Grill in Laguna
                  Beach. It's located on PCH, across from the{" "}
                  <ALink
                    href="https://www.montagehotels.com/lagunabeach"
                    target="_blank"
                  >
                    Montage
                  </ALink>{" "}
                  (a very nice resort completely built in California Crafstman
                  Bungalow Style .. it is a great place to wonder around,
                  overlooking the Pacific Ocean and then, head for La Sirena
                  Grill, they serve fresh Mex(eco) food:
                  <br />
                  <ALink
                    href="http://www.lasirenagrill.com/SouthLaguna/"
                    target="_blank"
                  >
                    La Sirena Grill near Montage on PCH ...
                  </ALink>
                </p>
                <PwSpace>
                  There are so many eateries and restaurants in walking distance
                  from our home or a few minutes away by car ... here is a short
                  list you can explore and look up, I will put a number next to
                  them to indicate walkability (10= very walkable, 0=need car,
                  5=maybe car is best):
                </PwSpace>
                <div>
                  <ul>
                    <li>Pirozzi (9)</li>
                    <li>Banderas (10)</li>
                    <li>The Quiet Woman (10)</li>
                    <li>
                      The Five Crown (9) ... has a Pub called Side Door
                      (reasonable pub food)
                    </li>
                    <li>Mayur Cuisine of India (9)</li>
                    <li>Gulfstream (8)</li>
                    <li>Tommy Bahamas (8)</li>
                  </ul>
                </div>
                <p>
                  I am adding a Google Map link of our immediate surroundings,
                  so you get a good view:
                </p>
                <p>
                  <ALink
                    href="https://www.google.com/maps/search/Restaurants/@33.6002013,-117.8756643,16z"
                    target="_blank"
                  >
                    Map showing nearby small eateries and restaurants ...
                  </ALink>
                </p>
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col xs="5" sm="5">
            <p>
              <b>Live Music, Concert Halls ...</b>
            </p>
          </Col>
          <Col xs="7" sm="7">
            <p>
              There are many live music places up and down the coast from our
              home. I added a link that shows a number of them. I included a few
              links to our Orange County music/theatre art center. That happens
              to be across from an expansive shopping mall - South Coast Plaza:
            </p>
            <ul>
              <li>
                <p>
                  <b>Live Music places nearby</b>
                </p>
                <p>
                  Check their respective site for program and times
                  <br />
                  <ALink
                    href="https://www.google.com/maps/search/live+music/@33.6148882,-117.8704722,12z"
                    target="_blank"
                  >
                    Bars, pubs, restaurants ... with live music
                  </ALink>
                </p>
              </li>
              <li>
                <p>
                  <b>Segerstrom Center for the Arts ...</b>
                </p>
                <p>
                  Originally called the Orange County Performing Arts Center,
                  this area is a complex of several interesting buildings built
                  for the purpose of housing music, theatre and ballet
                  performances. Not only is the architecture interesting, it has
                  some massive sculptures installed on the different plazas that
                  surround the area ... worth a visit, even just outside:
                  <br />
                  <ALink href="https://www.scfta.org/" target="_blank">
                    Our local performing arts center ...
                  </ALink>
                </p>
              </li>
              <li>
                <p>
                  <b>Some larger and/or better known venues ...</b>
                </p>
                <p>
                  This list contains some classics, a few in OC (Orange County),
                  others more concentrated in Los Angeles, check their
                  individual web site for additional info ... <br />
                  <ALink href="https://thecoachhouse.com/" target="_blank">
                    The Coach House (in Orange County) ...
                  </ALink>
                </p>
                <p>
                  House of Blues concert venue in Anaheim (close to Disneyland)
                  ... <br />
                  <ALink
                    href="http://www.houseofblues.com/anaheim"
                    target="_blank"
                  >
                    House of Blues (in Orange County) ...
                  </ALink>
                </p>
                <p>
                  Disney Concert Hall (which is unfortunately not operating
                  during the summer months, the normal concert activity starts
                  in September) ... however, a link is added below for a no-miss
                  activity while here and that is the Hollywood Bowl: <br />
                  <ALink href="https://www.laphil.com/" target="_blank">
                    Disney Concert Hall (Los Angeles) just the building is
                    spectacular ! ...
                  </ALink>
                </p>
                <p>
                  Hollywood Bowl (Los Angeles) ... as I remarked, a no-miss
                  experience, fun, good music, reasonable prices, pic-nic(able)
                  ... a true LA venue, large, expansive ... <br />
                  <ALink href="https://www.hollywoodbowl.com/" target="_blank">
                    Hollywood Bowl (in the summer, don't miss it !) ...
                  </ALink>
                </p>
                <p>
                  For theater fans, a few quick links to sites covering the LA
                  theater scene with always up to date info ... <br />
                  <ALink
                    href="https://www.discoverlosangeles.com/blog/discover-los-angeles-theater-scene"
                    target="_blank"
                  >
                    Discover the Los Angeles Theater Scene ...
                  </ALink>
                  <br />
                  <ALink
                    href="https://www.timeout.com/los-angeles/theater/the-best-performing-arts-centers-and-theaters-in-los-angeles"
                    target="_blank"
                  >
                    The best Performing Arts Centers in Los Angeles ...
                  </ALink>
                  <br />
                  <ALink
                    href="https://www.los-angeles-theatre.com/"
                    target="_blank"
                  >
                    Los Angeles Theatre - an independent guide ...
                  </ALink>
                </p>
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col xs="5" sm="5">
            <p>
              <b>Amusement Parks</b>
            </p>
          </Col>
          <Col xs="7" sm="7">
            <p>
              Southern California is no doubt the "Amusement Park" kingdom,
              there is something for everyone's taste (or so they think) ...
              however, personally my favorites are - San Diogo Zoo, Universal
              Studios and Magic Mountain (these are all a day trip from our home
              if you want to spend some quality time there particularly during
              the summer)
            </p>
            <ul>
              <li>
                <p>
                  <b>Nearby and/or day trip parks</b>
                </p>
                <p>
                  <ALink
                    href="https://www.google.com/search?rlz=1C5CHFA_enUS749US757&tbm=lcl&ei=g082W43UEc2GsAWXm6HAAQ&q=amusement+parks+near+me&oq=amusement+parks+near+me&gs_l=psy-ab.3...0.0.0.493425.0.0.0.0.0.0.0.0..0.0....0...1c..64.psy-ab..0.0.0....0.WCgHE51Uaxo#rlfi=hd:;si:;mv:!1m3!1d450453.8667269812!2d-117.86912058710936!3d33.780692953132316!3m2!1i1495!2i815!4f13.1"
                    target="_blank"
                  >
                    Map of Amusement Parks nearby ...
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
