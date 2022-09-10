import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { LinkContainer } from 'react-router-bootstrap';

import './navbar.css';
import './navbar.scss';

class NavBar extends React.Component {   
  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark" fixed='top' collapseOnSelect expand="lg">
          <Container>
            <Navbar.Brand href="https://fcbayern.com/en">
              <img
                src="../images/white-bayern-logo.png"
                alt="Bayern logo"
                id="navbar-logo"
                className="d-inline-block align-text-center"
              />
              Bayern Fanpage
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ms-auto" id="navmenu">
                <LinkContainer to="/">
                  <Nav.Link>Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/aboutUs">
                  <Nav.Link>About Us</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/favouritePlayers">
                  <Nav.Link>Favourite Players</Nav.Link>
                </LinkContainer>
                <NavDropdown title="Hall Of Fame" id="collapsible-nav-dropdown">
                  <LinkContainer to="hallOfFame/players">
                    <NavDropdown.Item>Players</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="hallOfFame/teams">
                    <NavDropdown.Item>Teams</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default NavBar;