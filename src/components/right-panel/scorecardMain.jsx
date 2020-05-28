import React from "react";
import { connect } from "react-redux";
import { CardTitle, CardContent } from "../../style.js";
import "../../App.css";
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
        className="donut"
        ariaDesc="Average number of pets"
        ariaTitle="Donut chart example"
        constrainToVisibleArea={true}
        data={[
          { x: "Bunches", y: 40 },
          { x: "Gaps", y: 15 },
          { x: "Crowding", y: 25 },
        ]}
        labels={({ datum }) => `${datum.x}: ${datum.y}%`}
        legendData={[
          { name: "Bunches: 40" },
          { name: "Gaps: 15" },
          { name: "Crowding: 25" },
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