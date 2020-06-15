import React, { useState, useEffect } from 'react';
import { NavLink, useParams } from "react-router-dom";
import { NavItem } from 'reactstrap';
import { getRoutereport } from '../../actions/index.jsx';
import { connect } from 'react-redux';


const DashboardNav = (props) => {
    //set up usetate here and usepparams to capture bus
    const [type, setType] = useState({
        route_type: 'All'
    });

    const { id } = useParams()

    const handleSubmit = () => {
        props.getRoutereport({ route_type: id || 'All' })
    }

    useEffect(() => {
        handleSubmit()
    }, [type])



    return (

        <nav className="navigation">
            {console.log('this rerenderd')}
            <NavItem>
                <NavLink exact to="/" onClick={() => setType({ route_type: 'All' })}>All</NavLink>
            </NavItem>
            <NavItem>
                <NavLink to="/Bus" onClick={() => setType({ route_type: id })}>Bus</NavLink>
            </NavItem>
            <NavItem>
                <NavLink to="/Rail" onClick={() => setType({ route_type: id })}>Rail</NavLink>
            </NavItem>
            <NavItem>
                <NavLink to="/Streetcar" onClick={() => setType({ route_type: id })}>Streetcar</NavLink>
            </NavItem>
            <NavItem>
                <NavLink to="/Express" onClick={() => setType({ route_type: id })}>Express</NavLink>
            </NavItem>
            <NavItem>
                <NavLink to="/Cablecar" onClick={() => setType({ route_type: id })}>Cable Car</NavLink>
            </NavItem>
            <NavItem>
                <NavLink to="/Shuttle" onClick={() => setType({ route_type: id })}>Shuttle</NavLink>
            </NavItem>
            <NavItem>
                <NavLink to="/Overnight" onClick={() => setType({ route_type: id })}>Overnight</NavLink>
            </NavItem>
            <NavItem>
                <NavLink to="/Rapid" onClick={() => setType({ route_type: id })}>Rapid </NavLink>
            </NavItem>
        </nav>
    )
}

export default connect(null, { getRoutereport })(DashboardNav);