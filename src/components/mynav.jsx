import React, { Component } from "react";
import { Navbar, Nav, NavDropdown, NavItem, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
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
      <div className="MyNav">
        <Navbar fixed="top" collapseOnSelect>
          <Navbar.Brand>
            <div>
              <Link to="/">
                <Image src="/assets/home.png" />
              </Link>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav>
              <NavDropdown title="Getting Around" id="basic-nav-dropdown">
                <NavDropdown.Item
                  href="/pages/rooms/access"
                  to="/pages/rooms/access"
                >
                  Access
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="/pages/rooms/hallway"
                  to="/pages/rooms/hallway"
                >
                  Hallway
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="/pages/rooms/familyroom"
                  to="/pages/rooms/familyroom"
                >
                  Family Room
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="/pages/rooms/dining"
                  to="/pages/rooms/dining"
                >
                  Dining Area
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="/pages/rooms/kitchen"
                  to="/pages/rooms/kitchen"
                >
                  Kitchen
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="/pages/rooms/masterbedroom"
                  to="/pages/rooms/masterbedroom"
                >
                  Master Bedroom
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="/pages/rooms/masterbathroom"
                  to="/pages/rooms/masterbathroom"
                >
                  Master Bathroom
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="/pages/rooms/bedroomtwo"
                  to="/pages/rooms/bedroomtwo"
                >
                  Bedroom Two
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="/pages/rooms/bedroomthree"
                  to="/pages/rooms/bedroomthree"
                >
                  Bedroom Three
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="/pages/rooms/bathroomtwo"
                  to="/pages/rooms/bathroomtwo"
                >
                  Bathroom Two
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="/pages/rooms/garage"
                  to="/pages/rooms/garage"
                >
                  Garage
                </NavDropdown.Item>
              </NavDropdown>
              <NavItem href="/pages/us" to="/pages/us">
                Us
              </NavItem>
              <NavItem href="/pages/contacts" to="/pages/contacts">
                Contacts
              </NavItem>
              <NavItem href="/pages/locations" to="/pages/locations">
                Locations
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
