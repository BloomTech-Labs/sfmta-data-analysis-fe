import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import {ScoreCardChart } from "./scorecardChart";


export const RightPanel = () => {
    
    return (
        <div className="right-panel">
            <ScoreCardChart></ScoreCardChart>
            <ScoreCardChart></ScoreCardChart>
        </div>
    );
}

