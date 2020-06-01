import React from "react";
// import CanvasJSReact from "./canvasjs/canvasjs.react";
// import { ScoreCard } from "../../style.js";
import { Doughnut } from "react-chartjs-2";

// var CanvasJS = CanvasJSReact.CanvasJS;
// var CanvasJSChart = CanvasJSReact.CanvasJSChart;



export const ScoreCardChart = () => {

  return (
    <div>
      <Doughnut
        data={{
          datasets: [
            {
              data: [10, 70, 20],
              backgroundColor: ["yellow", "brown", "blue"]
            },
          ],
          cutoutPercentage: 85,
          // These labels appear in the legend and in the tooltips when hovering different arcs
          labels: ["Bunches", "Gaps", "Crowding"],
        }}
      />
    </div>
  );
}


// export const ScoreCardChart = () => {
//   const options = {
//     theme: "dark1",
//     exportFileName: "Doughnut Chart",
//     exportEnabled: false,
//     animationEnabled: true,
//     responsive: true,
//     title: {
//       text: "80%",
//       verticalAlign: "center",
//       dockInsidePlotArea: true
//     },
//     legend: {
//       cursor: "pointer",
//       itemclick: explodePie
//     },
//     data: [{
//       type: "doughnut",
//       innerRadius: 100,
//       showInLegend: true,
//       toolTipContent: "<b>{name}</b>: ${y} (#percent%)",
//       indexLabel: "{name} - #percent%",
//       dataPoints: [
//         { y: 45, name: "Bunches" },
//         { y: 15, name: "Crowding" },
//         { y: 20, name: "Gaps" },
//         { y: 20, name: "", showInLegend: false, indexLabelLineThickness: 0, indexLabel: " ", color: "#1f1f1f" },
//       ]
//     }],
//     options: {
//       responsive: true,
//       legend: {
//         display: true,
//       }
//     },
//     centerText: {
//       display: true,
//       text: "280"
//     }
//   }

//   function explodePie(e) {
//     if (typeof (e.dataSeries.dataPoints[e.dataPointIndex].exploded) === "undefined" || !e.dataSeries.dataPoints[e.dataPointIndex].exploded) {
//       e.dataSeries.dataPoints[e.dataPointIndex].exploded = true;
//     } else {
//       e.dataSeries.dataPoints[e.dataPointIndex].exploded = false;
//     }
//     e.chart.render();
//   }


//   return (
//     <div>
//       <CanvasJSChart options={options} />
//     </div>
//   );
// }