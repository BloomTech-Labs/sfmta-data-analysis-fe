import React from 'react'
import { connect } from 'react-redux'
import { setRouteReport } from '../../actions/index'

const Route = (props) => {
    console.log("route", props)

    return (
        <div className="route" onClick={() => props.setRouteReport(props.route)}>
            <p>{props.route.route_name}</p>
            {/* <p>{props.route.coverage}</p> */}
        </div>
    )
}

export default connect(null, { setRouteReport })(Route)