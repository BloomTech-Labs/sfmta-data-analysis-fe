import React from 'react'
import { connect } from 'react-redux'
import { setRouteReport, setActiveRoute } from '../../actions/index'

const Route = (props) => {

    const setRoute = (route) => {
        props.setRouteReport(route)
        props.setActiveRoute(route)
        props.toggleDropDown(true)
    }

    return (
        <div className="route" onClick={() => setRoute(props.route)}>
            <p>{props.route.route_name}</p>
            {/* <p>{props.route.coverage}</p> */}
        </div>
    )
}

export default connect(null, { setRouteReport, setActiveRoute })(Route)