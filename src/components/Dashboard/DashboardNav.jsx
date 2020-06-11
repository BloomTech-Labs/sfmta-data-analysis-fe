import React, {useState} from 'react';
import { NavLink, useParams } from "react-router-dom";
import { NavItem } from 'reactstrap';
import  {routeSubmit} from '../../utilities/utilities.jsx'


const DashboardNav = () => {
    //set up usetate here and usepparams to capture bus
    const [ type , setType] = useState({
        route_type: 'All'
    });
    console.log(useParams())

    const {id} = useParams()
    
    console.log(id)
   
    return (
    <nav className="navigation">
        <NavItem>
            <NavLink exact to="/">All</NavLink>
        </NavItem>
        <NavItem>
            <NavLink to="/Bus" onClick={() => routeSubmit(id, setType)}>Bus</NavLink>
        </NavItem>
        <NavItem>
            <NavLink to="/Rail" onClick={() => routeSubmit(id, setType)}>Rail</NavLink>
        </NavItem>
        <NavItem>
            <NavLink to="/Streetcar" onClick={() => routeSubmit(id, setType)}>Streetcar</NavLink>
        </NavItem>
        <NavItem>
            <NavLink to="/Express" onClick={() => routeSubmit(id, setType)}>Express</NavLink>
        </NavItem>
        <NavItem>
            <NavLink to="/Cablecar" onClick={() => routeSubmit(id, setType)}>Cable Car</NavLink>
        </NavItem>
        <NavItem>
            <NavLink to="/Shuttle" onClick={() => routeSubmit(id, setType)}>Shuttle</NavLink>
        </NavItem>
        <NavItem>
            <NavLink to="/Overnight" onClick={() => routeSubmit(id, setType)}>Overnight</NavLink>
        </NavItem>
        <NavItem>
            <NavLink to="/Rapid" onClick={() => routeSubmit(id, setType)}>Rapid </NavLink>
        </NavItem>
    </nav>
    )
}

export default DashboardNav;