import React from 'react';
import {ScoreCardChart } from "./scorecardChart";


export const RightPanel = () => {
    
    return (
        <div className="right-panel">
            <div className="score-card">
                <h3>Overall Health</h3>
                <ScoreCardChart/>
            </div>
        </div>
    );
}

