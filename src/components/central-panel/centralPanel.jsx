import React  from 'react';
import Map from "./Map";
import { LineChart } from './line-chart';


 const CentralPanel = () => {
    
    return (
    <div className="central-panel">
        <Map/>
        <LineChart/>
    </div>
    );
}
export default CentralPanel;

