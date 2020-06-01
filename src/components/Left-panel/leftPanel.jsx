import React, { useState, useEffect } from './node_modules/react';
import { connect } from "./node_modules/react-redux";
import {SfmtaCalendar } from "./calendar.jsx";
import {BunchesCard} from "./bunches.jsx";
import {GapsCard} from "./bunches.jsx";
import {OntimeCard} from "./on-timejsx";

 const leftPanel = () => {
    
    return (
        <div className="left-panel">
       <SfmtaCalendar/>
       <BunchesCard/>
       <GapsCard/>
       <OntimeCard/>
        </div>
    );
}
export default leftPanel;

