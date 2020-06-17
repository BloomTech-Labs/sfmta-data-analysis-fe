import React from 'react';
import ScoreCardChart from "./overallHealth";
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

