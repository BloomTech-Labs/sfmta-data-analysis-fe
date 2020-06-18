import React, { useState, useEffect } from 'react';
import { NavLink, useParams } from "react-router-dom";
import { NavItem } from 'reactstrap';
import { getRoutereport } from '../../actions/index.jsx';
import { getRouteList, getDate } from '../../actions/index.jsx'
import { connect } from 'react-redux';


const DashboardNav = (props) => {
    const { id } = useParams()
    const [type, setType] = useState({
        route_type: id,
        date: props.date
    });


    const handleSubmit = () => {
        if (props.date) {
            props.getDate(type)
        } else {
            props.getRoutereport({ route_type: id || 'All' })
        }
        if (type.route_type !== 'All') {
            props.getRouteList(type)
        }

    }

    useEffect(() => {
        handleSubmit()
    }, [type])



    return (
        <nav className="navigation">
            <NavItem>
                <NavLink exact to="/" onClick={() => setType({ route_type: 'All', date: props.date })}>All</NavLink>
            </NavItem>
            <NavItem>
                <NavLink to="/Bus" onClick={() => setType({ route_type: id, date: props.date })}>Bus</NavLink>
            </NavItem>
            <NavItem>
                <NavLink to="/Rail" onClick={() => setType({ route_type: id, date: props.date })}>Rail</NavLink>
            </NavItem>
            <NavItem>
                <NavLink to="/Streetcar" onClick={() => setType({ route_type: id, date: props.date })}>Streetcar</NavLink>
            </NavItem>
            <NavItem>
                <NavLink to="/Express" onClick={() => setType({ route_type: id, date: props.date })}>Express</NavLink>
            </NavItem>
            <NavItem>
                <NavLink to="/Cablecar" onClick={() => setType({ route_type: id, date: props.date })}>Cable Car</NavLink>
            </NavItem>
            <NavItem>
                <NavLink to="/Shuttle" onClick={() => setType({ route_type: id, date: props.date })}>Shuttle</NavLink>
            </NavItem>
            <NavItem>
                <NavLink to="/Overnight" onClick={() => setType({ route_type: id, date: props.date })}>Overnight</NavLink>
            </NavItem>
            <NavItem>
                <NavLink to="/Rapid" onClick={() => setType({ route_type: id, date: props.date })}>Rapid </NavLink>
            </NavItem>
        </nav>
    )
}

const mapStateToProps = state => {
    return {
        date: state.date || state.report.date
    }
}

export default connect(mapStateToProps, { getRoutereport, getRouteList, getDate })(DashboardNav);
