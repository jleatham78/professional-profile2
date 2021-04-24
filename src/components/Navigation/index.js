import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

const Navbar = (props) => {
  return (
    <div>
      <Nav>
        <NavItem>
          <NavLink href="#about-me">About Me</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#portfolio">Portfolio</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#resume">Resume</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#contact-me">Contact</NavLink>
        </NavItem>
      </Nav>
      <hr />
    </div>
  );
}

export default Navbar;