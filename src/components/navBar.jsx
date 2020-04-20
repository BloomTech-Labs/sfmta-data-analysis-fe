import React from 'react';

import {  NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import logo from '../images/logo.png';
import { MainNav, Wrapper} from '../style';



const NavBar = props => {
    return (
        <Wrapper>
            <MainNav color="#636667" expand="md">
                <a className='ddt' href='/'><NavbarBrand><img className='logo' src={logo} alt='logo'/> Data Driven Transit</NavbarBrand></a>
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