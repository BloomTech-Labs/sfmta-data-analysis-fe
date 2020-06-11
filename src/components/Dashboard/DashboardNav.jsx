import React, {useState, useEffect} from 'react';
import { NavLink, useParams } from "react-router-dom";
import { NavItem } from 'reactstrap';
import { getRoutereport } from '../../actions/index.jsx';
import { connect } from 'react-redux';


const DashboardNav = (props) => {
    //set up usetate here and usepparams to capture bus
    const [ type , setType] = useState({
        route_type: 'All'
    });
    console.log(useParams())

    const {id} = useParams()
    
    console.log(id)
    
   
const handleChange = (id, cb) => {
    cb(id||'All')
}
const handleSubmit = () => {
    props.getRoutereport(type)
}

useEffect(() => {
    handleSubmit()
}, [type])

   
    
     return (
     
    <nav className="navigation">
            {console.log('this rerenderd')}
        <NavItem>
            <NavLink exact to="/">All</NavLink>
        </NavItem>
        <NavItem>
            <NavLink to="/Bus" onClick={() => handleChange(id, setType)}>Bus</NavLink>
        </NavItem>
        <NavItem>
            <NavLink to="/Rail" onClick={() => handleChange(id, setType)}>Rail</NavLink>
        </NavItem>
        <NavItem>
            <NavLink to="/Streetcar" onClick={() => handleChange(id, setType)}>Streetcar</NavLink>
        </NavItem>
        <NavItem>
            <NavLink to="/Express" onClick={() => handleChange(id, setType)}>Express</NavLink>
        </NavItem>
        <NavItem>
            <NavLink to="/Cablecar" onClick={() => handleChange(id, setType)}>Cable Car</NavLink>
        </NavItem>
        <NavItem>
            <NavLink to="/Shuttle" onClick={() => handleChange(id, setType)}>Shuttle</NavLink>
        </NavItem>
        <NavItem>
            <NavLink to="/Overnight" onClick={() => handleChange(id, setType)}>Overnight</NavLink>
        </NavItem>
        <NavItem>
            <NavLink to="/Rapid" onClick={() => handleChange(id, setType)}>Rapid </NavLink>
        </NavItem>
    </nav>
    )
}

export default connect(null, {getRoutereport})(DashboardNav);