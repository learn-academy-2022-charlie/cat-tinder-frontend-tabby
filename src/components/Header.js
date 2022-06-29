import React, { Component } from 'react'
import { Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom'

 class Header extends Component {
  render() {
    return (
     
        <Nav className="header-nav">
          <NavItem>
            <NavLink to="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/catindex">See All Pets</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/catnew">Add a Pet</NavLink>
          </NavItem>
        </Nav>
     
  
    )
  }
}
export default Header