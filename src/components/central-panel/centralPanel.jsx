import React from 'react';
import Map from "./Map";
import LineChart from './line-chart';
import RouteList from './route-list'


const CentralPanel = () => {

    return (
        <div className="central-panel">
            <Map />
            {/* <LineChart /> */}
            <RouteList />
        </div>
    );
}
export default CentralPanel;

