import React, { Component } from 'react'
import { Navbar, Nav, NavLink, NavItem } from 'reactstrap';


 class Footer extends Component {
  render() {
    return (
      <Navbar color="dark" id="footer">
      <Nav>
        <NavItem>
          <NavLink>Footer</NavLink>
        </NavItem>
      </Nav>
  </Navbar>
    )
  }
}
export default Footer