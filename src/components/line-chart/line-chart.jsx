import React from 'react';
import { Line } from 'react-chartjs-2'

export const LineChart = () => {
  return (
    <div className="line-chart">
    <Line 
      data={{
        datasets: [
          {
            data: [70, 30, 20, 10, 85],
            backgroundColor: ["#FBD03F", "#232323"],
            borderColor: '#3333ff',
            fill: true,
          }
        ]
      }}
    />
    </>
  )
};