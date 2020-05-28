import React, { useState, useEffect } from 'react';
import Map from './Map';

import { connect } from 'react-redux';
import { fetchTypeAndRoute } from '../../actions/index';
import { FullScorecard } from '../right-panel/scorecardFull';


const Dashboard = () => {
    return (
        <>
            <Map />
            <FullScorecard />
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