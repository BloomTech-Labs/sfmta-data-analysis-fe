import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { RightPanel } from '../right-panel/rightPanel';
import LeftPanel from '../Left-panel/leftPanel';
import CentralPanel from '../central-panel/centralPanel';
import DashboardNav from './DashboardNav';


export const Dashboard = () => {
    return (
        <div className='dashboard'>
            <DashboardNav />
            <LeftPanel />
            <CentralPanel />
            <RightPanel />
        </div>
    )
}

export default connect(null, {})(Dashboard)