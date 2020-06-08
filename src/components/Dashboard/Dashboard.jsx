import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchTypeAndRoute } from '../../actions/index';
import { RightPanel } from '../right-panel/rightPanel';
import LeftPanel from '../Left-panel/leftPanel';
import CentralPanel from '../central-panel/centralPanel';


const Dashboard = () => {
    return (
        <div className='dashboard'>
            <LeftPanel />
            <CentralPanel/>
            <RightPanel />
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