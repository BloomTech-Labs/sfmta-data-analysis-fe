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
        props.getRouteList(object)
    }, [])

    return (
        <>
            {/* {props.routes && props.routes.forEach(route => {
                return <Route route={route} />
            })} */}
        </>
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