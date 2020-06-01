import React from "react";
import { Doughnut } from "react-chartjs-2"

export const ScoreCardChart = () => {

  return (
    <>
      <Doughnut
        data = {{
          datasets: [
            {
              data: [80, 20], backgroundColor:["#FBD03F","black"], borderWidth:0
            },
            {
              data: [50, 50], backgroundColor:["#FF6D37","black"], borderWidth:0
            },
            {
              data: [20, 80], backgroundColor:["#40FFCE","black"], borderWidth:0
            },
            
        ],
        // These labels appear in the legend and in the tooltips when hovering different arcs
        // labels: [
        //     'Bunches',
        //     'Gaps',
        //     'Crowding'
        // ], 
        }}

        options = {{
            cutoutPercentage:65,
        }}
      />
    </>
  );
}