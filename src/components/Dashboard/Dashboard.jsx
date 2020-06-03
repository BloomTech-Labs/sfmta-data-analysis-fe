import React, { useState, useEffect } from 'react';
import Map from './Map';
import { connect } from 'react-redux';
import { fetchTypeAndRoute } from '../../actions/index';
import { RightPanel } from '../right-panel/rightPanel';
import LeftPanel from '../Left-panel/leftPanel';
import { LineChart } from '../line-chart/line-chart';


const Dashboard = () => {
    return (
        <div className='dashboard'>
            <LeftPanel />
            <Map />
            <RightPanel />
            <LineChart />
        </div>
    )
}

const mapStateToProps = state => {
    return {
        typeAndRouteInfo: state.typeAndRouteInfo,
        isFetching: state.isFetching
    }
}

export default connect(mapStateToProps, { fetchTypeAndRoute })(Dashboard)