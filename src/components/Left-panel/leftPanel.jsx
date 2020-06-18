import React from 'react';
import SfmtaCalendar from "./calendar";
import BunchesCard from "./bunches";
import GapsCard from "./gaps";



 export const LeftPanel = () => {
    
    return (
    <div className="left-panel">
       <SfmtaCalendar/>
       <BunchesCard/>
       <GapsCard/>
    </div>
    );
}
export default LeftPanel;

