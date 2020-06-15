import React from 'react';
import { ScoreCardChart } from "./overallHealth";
import { ScoreFooter } from "./scoreFooter";
import OnTimePercent from "./onTime"
import Coverage from "./coverage"

export const RightPanel = () => {

  return (
    <div className="right-panel">
      <div >
       <ScoreCardChart />
      </div>
      <OnTimePercent />
      <Coverage />
    </div>
  );
}

