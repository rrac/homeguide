import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Grid, Row, Col, Image, Button, Jumbotron } from "react-bootstrap";
import styled from "styled-components";

const JumboH1 = styled.div`
  text-align: center;
  font-family: "Roboto";
  font-size: 3em
  font-weight: 900;
`;

const JumboP = styled.p`
  text-align: center;
  text-weight: 100;
  text-color: grey;
`;

class Home extends Component {
  render() {
    return (
      <Grid>
        <Jumbotron>
            <JumboH1>Welcome to Our Home</JumboH1>
          <JumboP>
            This web-based guide aims at providing you with both a visual and
            written document of the features (and quirks) of our home, its
            surroundings and attractive locations to visit or travel to when
            here.
          </JumboP>
        </Jumbotron>
        <Row>
          <Col xs={12} sm={12}>
            <Image src="/assets/home309c.jpg" responsive />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Home;
