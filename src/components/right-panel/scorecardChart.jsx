import React from "react";
import { Doughnut } from "react-chartjs-2";

export const ScoreCardChart = () => {
  return (
    <>
      <Doughnut
        data={{
          datasets: [
            {
              data: [80, 20],
              backgroundColor: ["#FBD03F", "#232323"],
              borderWidth: 0,
              weight: 0.5,
            },
            {
              data: [50, 50],
              backgroundColor: ["#FF6D37", "#232323"],
              borderWidth: 0,
              weight: 0.5,
            },
            {
              data: [20, 80],
              backgroundColor: ["#40FFCE", "#232323"],
              borderWidth: 0,
              weight: 0.5,
            },
          ],
        }}

        options={{
          cutoutPercentage: 65,
          tooltips: true,
          title:{
            display:true,
            text:"80%",
            position: "top",
            padding: 0,
            fontSize: 20,
            fontColor: "white"
          }
        }}
      />
    </>
  );
};
