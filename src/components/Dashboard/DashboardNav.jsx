import React, {useState, useEffect} from 'react';
import { NavLink, useParams } from "react-router-dom";
import { NavItem } from 'reactstrap';
import { getRoutereport } from '../../actions/index.jsx';
import { connect } from 'react-redux';


const DashboardNav = (props) => {
    console.log('This is the report', props.report)
    
    //set up usestate here and useparams to capture bus
    const [ type , setType] = useState({
        route_type: 'All'
    });
    console.log(useParams())

    const {id} = useParams()
    
    console.log(id)
 
   
// const handleChange = (id, cb) => {
//     cb({ route_type: id || 'All' })
// }

const handleSubmit = () => {
    console.log(type, "this is type")
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
            <NavLink to="/Bus" onClick={() => setType('Bus')}>Bus</NavLink>
        </NavItem>
        <NavItem>
            <NavLink to="/Rail" onClick={() => (id, setType)}>Rail</NavLink>
        </NavItem>
        <NavItem>
            <NavLink to="/Streetcar" onClick={() => (id, setType)}>Streetcar</NavLink>
        </NavItem>
        <NavItem>
            <NavLink to="/Express" onClick={() => (id, setType)}>Express</NavLink>
        </NavItem>
        <NavItem>
            <NavLink to="/Cablecar" onClick={() => (id, setType)}>Cable Car</NavLink>
        </NavItem>
        <NavItem>
            <NavLink to="/Shuttle" onClick={() => (id, setType)}>Shuttle</NavLink>
        </NavItem>
        <NavItem>
            <NavLink to="/Overnight" onClick={() => (id, setType)}>Overnight</NavLink>
        </NavItem>
        <NavItem>
            <NavLink to="/Rapid" onClick={() => (id, setType)}>Rapid </NavLink>
        </NavItem>
    </nav>
    )
}

const mapStateToProps = state => {
    return {
      report: state.report
    }
  }
   

export default connect(mapStateToProps, {getRoutereport})(DashboardNav);