import React, { Component } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "./mynav.css";

export default class MyNav extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <Navbar collapseOnSelect fixed="top" expand="lg">
        <Navbar.Brand href="/">
          <img
            src="./assets/home.png"
            className="d-inline-block align-top"
            alt="Home Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="Getting Around" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/pages/rooms/access">
                Access
              </NavDropdown.Item>
              <NavDropdown.Item href="/pages/rooms/hallway">
                Hallway
              </NavDropdown.Item>
              <NavDropdown.Item href="/pages/rooms/familyroom">
                Family Room
              </NavDropdown.Item>
              <NavDropdown.Item href="/pages/rooms/dining">
                Dining Area
              </NavDropdown.Item>
              <NavDropdown.Item href="/pages/rooms/kitchen">
                Kitchen
              </NavDropdown.Item>
              <NavDropdown.Item href="/pages/rooms/masterbedroom">
                Master Bedroom
              </NavDropdown.Item>
              <NavDropdown.Item href="/pages/rooms/masterbathroom">
                Master Bathroom
              </NavDropdown.Item>
              <NavDropdown.Item href="/pages/rooms/bedroomtwo">
                Bedroom Two
              </NavDropdown.Item>
              <NavDropdown.Item href="/pages/rooms/bedroomthree">
                Bedroom Three
              </NavDropdown.Item>
              <NavDropdown.Item href="/pages/rooms/bathroomtwo">
                Bathroom Two
              </NavDropdown.Item>
              <NavDropdown.Item href="/pages/rooms/garage">
                Garage
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/pages/us">Us</Nav.Link>
            <Nav.Link href="/pages/contacts">Contacts</Nav.Link>
            <Nav.Link href="/pages/locations">Locations</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
