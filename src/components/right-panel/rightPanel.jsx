import React from 'react';
import {ScoreCardChart } from "./scorecardChart";


export const RightPanel = () => {
    
    return (
        <div className="right-panel">
            <div className="score-card">
                <h1>Bus</h1>
                <ScoreCardChart/>
                {/* <h1>Rail</h1>
                <ScoreCardChart/>
                <h1>Streetcar</h1>
                <ScoreCardChart/>
                <h1>Express</h1>
                <ScoreCardChart/> */}
            </div>
        </div>
    );
}

