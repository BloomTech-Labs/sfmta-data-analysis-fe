import React from 'react';
import {ScoreCardChart } from "./scorecardChart";
import { ScoreFooter } from "./scoreFooter";

export const RightPanel = () => {
    
    return (
        <div className="right-panel">
            <div className="score-card">
                <h3>Overall Health</h3>
                <ScoreCardChart/>
                {/* <h1>Rail</h1>
                <ScoreCardChart/>
                <h1>Streetcar</h1>
                <ScoreCardChart/>
                <h1>Express</h1>
                <ScoreCardChart/> */}
                <ScoreFooter className="footer"/>
            </div>
        </div>
    );
}

