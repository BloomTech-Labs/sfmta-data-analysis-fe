import React from 'react';

import {  NavbarBrand, Nav, NavItem } from 'reactstrap';
import { NavLink } from "react-router-dom";
import logo from '../images/logo.png';
import { MainNav, Wrapper } from '../style';




const NavBar = props => {
    return (
        <Wrapper>
            <MainNav color="#636667" expand="md" className="navigation">
                <Nav className="mr-auto navigation" navbar>
                    <a className='ddt' href='/'><NavbarBrand><img className='logo' src={logo} alt='logo'/> Data Driven Transit</NavbarBrand></a>
                    <NavItem>
                        <NavLink to="/aboutus">About us</NavLink>
                    </NavItem>
                </Nav>
                <Nav className="mr-auto navigation" navbar>
                    <NavItem>
                        <NavLink exact to="/">All</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/bus">Bus</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/rail">Rail</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/streetcar">Streetcar</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/express">Express</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/cablecar">Cable Car</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/shuttle">Shuttle</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/overnight">Overnight</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/rapid">Rapid</NavLink>
                    </NavItem>
                </Nav>
            </MainNav>
        </Wrapper>
    )
}

export default NavBar;