import React, { useState, useEffect } from 'react';

import TransitRow from './TransitRow';
import Map from './Map';

import { connect } from 'react-redux';
import { fetchTypeAndRoute } from '../../actions/index';


const Dashboard = (props) => {
    const [transit, setTransit] = useState()
    useEffect(() => {
        props.fetchTypeAndRoute()
            .then(res => {
                setTransit(res)
            })
    }, [])
    console.log(transit)
    return (
        <>
            {transit && transit.type.map(type => {
                return <TransitRow type={type} />
            })}
            <Map />
        </>
    )
}

const mapStateToProps = state => {
    return {
        typeAndRouteInfo: state.typeAndRouteInfo,
        isFetching: state.isFetching
    }
}

export default connect(mapStateToProps, { fetchTypeAndRoute })(Dashboard)