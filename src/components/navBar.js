import React from 'react';
import styled from 'styled-components';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const Wrapper = styled.div`
    width: 100%;
`
    
const MainNav = styled(Navbar)`    

`


const NavBar = props => {
    return (
      <Wrapper>
            <MainNav color="#636667" light expand="md">
                <NavbarBrand href="/">SFTMA Data Analysis</NavbarBrand>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <NavLink href="/">Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/data">Data</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/aboutus">About Us</NavLink>
                    </NavItem>
                </Nav>
            </MainNav>
          

      </Wrapper>
    )
}

export default NavBar;