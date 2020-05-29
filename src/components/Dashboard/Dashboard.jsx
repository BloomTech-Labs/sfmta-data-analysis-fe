import React, { useState, useEffect } from 'react';
import Map from './Map';
import { connect } from 'react-redux';
import { fetchTypeAndRoute } from '../../actions/index';
import { RightPanel } from '../right-panel/rightPanel';
import SfmtaCalendar from "../Left-panel/calendar";


const Dashboard = () => {
    return (
        <>
            <Map />
            <SfmtaCalendar />
            <RightPanel />
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