import React from "react";
import { Doughnut, defaults } from "react-chartjs-2";


export const ScoreCardChart = () => {

  

  return (
    <>
      <Doughnut
        data = {{
          datasets: [
            {
              data: [80, 20], backgroundColor:["#FBD03F","#232323"], borderWidth:0, weight:0.5
            },
            {
              data: [50, 50], backgroundColor:["#FF6D37","#232323"], borderWidth:0, weight:0.5, 
            },
            {
              data: [20, 80], backgroundColor:["#40FFCE","#232323"], borderWidth:0, weight:0.5, 
            },
            
        ],
        }}

        options = {{
            cutoutPercentage:65,
            tooltips:{
              enabled:false
            },
        }}


        plugins ={{
          beforeDraw: function(chart) {
            var width = chart.chart.width,
                height = chart.chart.height,
                ctx = chart.chart.ctx;
            
            ctx.restore();
            var fontSize = (height / 114).toFixed(2);
            ctx.font = fontSize + "em sans-serif";
            ctx.textBaseline = "middle";
            ctx.fillStyle = "white"
        
            var text = "75%",
                textX = Math.round((width - ctx.measureText(text).width) / 2),
                textY = height / 2;
        
            ctx.fillText(text, textX, textY);
            ctx.save();
          }
        }}
      />
    </>
  );
}


