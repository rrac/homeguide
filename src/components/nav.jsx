import React, { Component } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  NavItem,
  MenuItem,
  Image
} from "react-bootstrap";
import { Link } from "react-router-dom";
import TranslateComp from './translate';
import "./nav.css";

class MyNav extends Component {
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
      <div>
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
              <NavItem>
                <TranslateComp />
              </NavItem>
              <NavDropdown
                eventKey={1}
                title="Getting Around"
                id="basic-nav-dropdown">
                <MenuItem
                  eventKey={1.1}
                  componentClass={Link}
                  href="/pages/rooms/access"
                  to="/pages/rooms/access">
                  Access
                </MenuItem>
                <MenuItem
                  eventKey={1.2}
                  componentClass={Link}
                  href="/pages/rooms/hallway"
                  to="/pages/rooms/hallway">
                  Hallway
                </MenuItem>
                <MenuItem
                  eventKey={1.3}
                  componentClass={Link}
                  href="/pages/rooms/familyroom"
                  to="/pages/rooms/familyroom">
                  Family Room
                </MenuItem>
                <MenuItem
                  eventKey={1.4}
                  componentClass={Link}
                  href="/pages/rooms/dining"
                  to="/pages/rooms/dining">
                  Dining Area
                </MenuItem>
                <MenuItem
                  eventKey={1.5}
                  componentClass={Link}
                  href="/pages/rooms/kitchen"
                  to="/pages/rooms/kitchen">
                  Kitchen
                </MenuItem>
                <MenuItem
                  eventKey={1.6}
                  componentClass={Link}
                  href="/pages/rooms/masterbedroom"
                  to="/pages/rooms/masterbedroom">
                  Master Bedroom
                </MenuItem>
                <MenuItem
                  eventKey={1.7}
                  componentClass={Link}
                  href="/pages/rooms/masterbathroom"
                  to="/pages/rooms/masterbathroom">
                  Master Bathroom
                </MenuItem>
                <MenuItem
                  eventKey={1.8}
                  componentClass={Link}
                  href="/pages/rooms/bedroomtwo"
                  to="/pages/rooms/bedroomtwo">
                  Bedroom Two
                </MenuItem>
                <MenuItem
                  eventKey={1.9}
                  componentClass={Link}
                  href="/pages/rooms/bedroomthree"
                  to="/pages/rooms/bedroomthree">
                  Bedroom Three
                </MenuItem>
                <MenuItem
                  eventKey={1.11}
                  componentClass={Link}
                  href="/pages/rooms/bathroomtwo"
                  to="/pages/rooms/bathroomtwo">
                  Bathroom Two
                </MenuItem>
                <MenuItem
                  eventKey={1.12}
                  componentClass={Link}
                  href="/pages/rooms/garage"
                  to="/pages/rooms/garage">
                  Garage
                </MenuItem>
              </NavDropdown>
              <NavItem
                eventKey={2}
                componentClass={Link}
                href="/pages/us"
                to="/pages/us">
                Us
              </NavItem>
              <NavItem
                eventKey={3}
                componentClass={Link}
                href="/pages/contacts"
                to="/pages/contacts">
                Contacts
              </NavItem>
              <NavItem
                eventKey={4}
                componentClass={Link}
                href="/pages/locations"
                to="/pages/locations">
                Locations
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default MyNav;
