import React, { Component } from 'react'
import { Navbar, Nav, NavLink, NavItem } from 'reactstrap';

 class Header extends Component {
  render() {
    return (
     
        <Nav className="header-nav">
          <NavItem>
            <NavLink>Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>New</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>Edit</NavLink>
          </NavItem>
        </Nav>
     
  
    )
  }
}
export default Header