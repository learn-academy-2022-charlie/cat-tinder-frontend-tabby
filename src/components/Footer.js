import React, { Component } from 'react'
import { Navbar, Nav, NavLink, NavItem } from 'reactstrap';


 class Footer extends Component {
  render() {
    return (
      <nav className = "footer">
      <Navbar>
      <Nav>
        <NavItem>
          <NavLink id="copyright">@CopyRight Geovanna and Nic</NavLink>
        </NavItem>
        {/* <NavItem>
          <NavLink>New</NavLink>
        </NavItem>
        <NavItem>
          <NavLink>Edit</NavLink>
        </NavItem> */}
      </Nav>
  </Navbar>
  </nav>
    )
  }
}
export default Footer