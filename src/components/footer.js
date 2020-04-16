import React from 'react';
import styled from 'styled-components';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import logo from '../images/logo.png';

const Wrapper = styled.div`
    width: 100%;
    position: sticky;
    bottom: 0;
`;
    
const MainNav = styled(Navbar)`    
    color: #FD5A1E;
    display: flex;
    align-items: center;
`;

const Footer = props => {
    return (
        <div>
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
        </div>
    )
}

export default Footer;