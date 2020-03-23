import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const NavBar = props => {
    return (
      <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">SFTMA Data Analysis</NavbarBrand>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <NavLink href="/">Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="">Data</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="">About Us</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
          

      </div>
    )
}

export default NavBar;