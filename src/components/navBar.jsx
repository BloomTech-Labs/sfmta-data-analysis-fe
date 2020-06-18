import React from 'react';

import { NavbarBrand, Nav, NavItem } from 'reactstrap';
import { NavLink } from "react-router-dom";
import logo from '../images/logo.png';
import { MainNav, Wrapper } from '../style';

const NavBar = props => {
    return (
        <Wrapper>
            <MainNav color="#636667" expand="md" className="navigation">
                <Nav className="mr-auto navigation" navbar>
                    <a className='ddt' href='/'><NavbarBrand><img className='logo' src={logo} alt='logo' /> Data Driven Transit</NavbarBrand></a>
                    <NavItem>
                    </NavItem>
                </Nav>
            </MainNav>
        </Wrapper>
    )
}

export default NavBar;