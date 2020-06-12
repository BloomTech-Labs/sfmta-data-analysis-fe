import React from 'react';
import { ScoreCardChart } from "./scorecardChart";
import { ScoreFooter } from "./scoreFooter";
import OnTimePercent from "./onTime"
import Coverage from "./coverage"

export const RightPanel = () => {

  return (
    <div className="right-panel">
      <div className="score-card metrics">
       <ScoreCardChart />
      </div>
      <OnTimePercent />
      <Coverage />
    </div>
  );
}

