import React  from 'react';
import SfmtaCalendar  from "./calendar.jsx";
import BunchesCard from "./bunches.jsx";
import GapsCard from "./bunches.jsx";
import OntimeCard from "./on-time.jsx";

 const LeftPanel = () => {
    
    return (
        <div className="left-panel">
       <SfmtaCalendar/>
       <BunchesCard/>
       <GapsCard/>
       <OntimeCard/>
        </div>
    );
}
export default LeftPanel;

