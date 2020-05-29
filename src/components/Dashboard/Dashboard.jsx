import React, { useState, useEffect } from 'react';
import Map from './Map';

import { connect } from 'react-redux';
import { fetchTypeAndRoute } from '../../actions/index';


const Dashboard = () => {
    return (
        <>
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