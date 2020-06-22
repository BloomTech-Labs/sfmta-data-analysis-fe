import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import { getRouteList } from '../../actions/index'

import Route from './route'

export const RouteList = (props) => {
    const [open, setOpen] = useState(false)
    const toggleDropDown = (param) => {
        setOpen(!param)
    }

    return (
        <div>
            <div className={"route-list" + (open ? ' hidden' : ' drop-down')} onClick={() => toggleDropDown(open)}>
                <p>{props.active.route_name || 'Route'}</p>
                <p>{props.active.overall_health || 'Health'}</p>
                <div className='triangle' />
            </div>
            <div className={"route-list" + (open ? ' drop' : ' hidden')}>

                <div className="route" onClick={() => toggleDropDown(open)}>
                    <p>Route</p>
                    <p id='health-header'>Health</p>
                </div>
                {
                    props.routes.map(route => {
                        return <Route route={route} toggleDropDown={toggleDropDown} />
                    })
                }
            </div >

        </div >
    )
}

const mapStateToProps = state => {
    return {
        active: state.active,
        date: state.date || state.report.date,
        routes: state.routes
    }
}

export default connect(mapStateToProps, { getRouteList })(RouteList)