import React from 'react';
import { NavLink } from "react-router-dom";
import { NavItem } from 'reactstrap';


const DashboardNav = () => {
    return (
    <nav className="navigation">
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
    </nav>
    )
}

export default DashboardNav;