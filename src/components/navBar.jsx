import React from 'react';

import {  NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import logo from '../images/logo.png';
import { MainNav, Wrapper} from '../style';
import { Switch } from 'react-router-dom';



const NavBar = props => {
    return (
        <Wrapper>
            <MainNav color="#636667" expand="md" className="navigation">
                <Nav className="mr-auto subnav" navbar>
                    <a className='ddt' href='/'><NavbarBrand><img className='logo' src={logo} alt='logo'/> Data Driven Transit</NavbarBrand></a>
                    <NavItem>
                        <NavLink href="/aboutus">About us</NavLink>
                    </NavItem>
                </Nav>
                <Nav className="mr-auto subnav" navbar>
                    <NavItem>
                        <NavLink href="/">All</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/bus">Bus</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/rail">Rail</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/streetcar">Streetcar</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/express">Express</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/cablecar">Cable Car</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/shuttle">Shuttle</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/overnight">Overnight</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/rapid">Rapid</NavLink>
                    </NavItem>
                </Nav>
            </MainNav>
        </Wrapper>
    )
}

export default NavBar;