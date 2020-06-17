import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import { getRouteList } from '../../actions/index'

import Route from './route'

export const RouteList = (props) => {
    const [object, SetObject] = useState({
        route_type: props.route_type,
        date: props.date
    })
    useEffect(() => {
        console.log(props.route_type)
        if(props.route_type!="All")
            props.getRouteList(object)
    }, [props.route_type])

    return (
        <div className="route-list">
                <div className="route">
                    <p>All</p>
                    <p>Health</p>
                </div>
            {props.routes.map(route => {
                return <Route route={route}/>
                })
            }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        route_type: state.report.route_id,
        date: state.date || state.report.date,
        routes: state.routes
    }
}

export default connect(mapStateToProps, { getRouteList })(RouteList)