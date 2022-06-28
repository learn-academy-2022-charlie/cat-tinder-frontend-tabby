import React, { Component } from 'react'
import { Navbar, Nav, NavLink, NavItem } from 'reactstrap';

 class Header extends Component {
  render() {
    return (
      <Navbar color="dark">
        <Nav>
          <NavItem>
            <NavLink>Home</NavLink>
          </NavItem>
        </Nav>
    </Navbar>
  
    )
  }
}
export default Header