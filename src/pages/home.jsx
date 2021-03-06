import React, { Component } from "react";
import { Container, Row, Col, Image, Jumbotron } from "react-bootstrap";
import styled from "styled-components";

const JumboH1 = styled.div`
  text-align: center;
  font-family: "Roboto";
  font-size: 3em;
  font-weight: 900;
`;

const JumboP = styled.p`
  text-align: center;
  text-decoration-color: grey;
  size: 100;
`;

class Home extends Component {
  render() {
    return (
      <Container fluid>
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
          <Col>
            <Image src="/assets/home309c.jpg" />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
