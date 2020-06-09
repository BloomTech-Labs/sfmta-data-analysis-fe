import React from 'react';
import { ScoreCardChart } from "./scorecardChart";
import { ScoreFooter } from "./scoreFooter";
import OnTimePercent from "./onTime"
import Coverage from "./coverage"

export const RightPanel = () => {

  return (
    <div className="right-panel">
      <div className="score-card metrics">
        <h3>Overall Health</h3>
        <ScoreCardChart />
        <ScoreFooter className="footer" />
      </div>
      <OnTimePercent />
      <Coverage />
    </div>
  );
}

