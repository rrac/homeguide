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
        <Navbar fixedTop fluid collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <div>
                <Link to="/">
                  <Image src="/assets/home.png" />
                </Link>
              </div>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavDropdown
                eventKey={1}
                title="Getting Around"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item
                  eventKey={1.1}
                  componentClass={Link}
                  href="/pages/rooms/access"
                  to="/pages/rooms/access"
                >
                  Access
                </NavDropdown.Item>
                <NavDropdown.Item
                  eventKey={1.2}
                  componentClass={Link}
                  href="/pages/rooms/hallway"
                  to="/pages/rooms/hallway"
                >
                  Hallway
                </NavDropdown.Item>
                <NavDropdown.Item
                  eventKey={1.3}
                  componentClass={Link}
                  href="/pages/rooms/familyroom"
                  to="/pages/rooms/familyroom"
                >
                  Family Room
                </NavDropdown.Item>
                <NavDropdown.Item
                  eventKey={1.4}
                  componentClass={Link}
                  href="/pages/rooms/dining"
                  to="/pages/rooms/dining"
                >
                  Dining Area
                </NavDropdown.Item>
                <NavDropdown.Item
                  eventKey={1.5}
                  componentClass={Link}
                  href="/pages/rooms/kitchen"
                  to="/pages/rooms/kitchen"
                >
                  Kitchen
                </NavDropdown.Item>
                <NavDropdown.Item
                  eventKey={1.6}
                  componentClass={Link}
                  href="/pages/rooms/masterbedroom"
                  to="/pages/rooms/masterbedroom"
                >
                  Master Bedroom
                </NavDropdown.Item>
                <NavDropdown.Item
                  eventKey={1.7}
                  componentClass={Link}
                  href="/pages/rooms/masterbathroom"
                  to="/pages/rooms/masterbathroom"
                >
                  Master Bathroom
                </NavDropdown.Item>
                <NavDropdown.Item
                  eventKey={1.8}
                  componentClass={Link}
                  href="/pages/rooms/bedroomtwo"
                  to="/pages/rooms/bedroomtwo"
                >
                  Bedroom Two
                </NavDropdown.Item>
                <NavDropdown.Item
                  eventKey={1.9}
                  componentClass={Link}
                  href="/pages/rooms/bedroomthree"
                  to="/pages/rooms/bedroomthree"
                >
                  Bedroom Three
                </NavDropdown.Item>
                <NavDropdown.Item
                  eventKey={1.11}
                  componentClass={Link}
                  href="/pages/rooms/bathroomtwo"
                  to="/pages/rooms/bathroomtwo"
                >
                  Bathroom Two
                </NavDropdown.Item>
                <NavDropdown.Item
                  eventKey={1.12}
                  componentClass={Link}
                  href="/pages/rooms/garage"
                  to="/pages/rooms/garage"
                >
                  Garage
                </NavDropdown.Item>
              </NavDropdown>
              <NavItem
                eventKey={2}
                componentClass={Link}
                href="/pages/us"
                to="/pages/us"
              >
                Us
              </NavItem>
              <NavItem
                eventKey={3}
                componentClass={Link}
                href="/pages/contacts"
                to="/pages/contacts"
              >
                Contacts
              </NavItem>
              <NavItem
                eventKey={4}
                componentClass={Link}
                href="/pages/locations"
                to="/pages/locations"
              >
                Locations
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
