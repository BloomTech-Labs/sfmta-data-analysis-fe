import React from "react";
import { connect } from "react-redux";
import { CardTitle, CardContent } from "../../style.js";
import { ScoreCard } from "../../style.js";
import {
  ChartDonut,
  ChartThemeColor,
  ChartThemeVariant,
} from "@patternfly/react-charts";


const mock = {
    type: "Bus",
    score: 81,
    bunches: 40,
    gaps: 15,
    crowding: 25
  };
 

export const MainScore = () => {
  return (
    <div style={{ height: "230px", width: "350px" }}>
      <ChartDonut
        ariaDesc="Average number of pets"
        ariaTitle="Donut chart example"
        constrainToVisibleArea={true}
        data={[
          { x: "Bunches", y: 40, color: "white" },
          { x: "Gaps", y: 15, color: "white" },
          { x: "Crowding", y: 25, color: "white" },
        ]}
        labels={({ datum }) => `${datum.x}: ${datum.y}%`}
        legendData={[
          { name: "Bunches: 40", color: "white" },
          { name: "Gaps: 15", color: "white" },
          { name: "Crowding: 25", color: "white" },
        ]}
        legendOrientation="vertical"
        legendPosition="right"
        padding={{
          bottom: 20,
          left: 20,
          right: 140, // Adjusted to accommodate legend
          top: 20,
        }}
        title="80%"
        themeColor={ChartThemeColor.multiOrdered}
        width={350}
      />
    </div>
  );
    // return (
    //   <>
    //         <ScoreCard>
    //           <CardTitle>
    //             <h4>{mock.type}</h4>
    //           </CardTitle>
    //           <CardContent>
    //             <h2>{mock.score}%</h2>
    //           </CardContent>
    //         </ScoreCard>
    //   </>
    // );
}