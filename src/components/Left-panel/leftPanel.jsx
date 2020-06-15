import React from 'react';
import SfmtaCalendar from "./calendar";
import BunchesCard from "./bunches";
import GapsCard from "./gaps";
import OntimeCard from "./on-time";

const LeftPanel = () => {

   return (
      <div className="left-panel">
         <SfmtaCalendar />
         <BunchesCard />
         <GapsCard />
         {/* <OntimeCard/>  */}
      </div>
   );
}
export default LeftPanel;

