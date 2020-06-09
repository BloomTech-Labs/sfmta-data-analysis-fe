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
              label: '% gapped',
              backgroundColor: ["#FBD03F", "#40FFCE"],
              borderColor: '#00FFFF',
              fill: false
            },
            {
              data: [50, 10, 90, 5, 65],
              label: '# bunches',
              backgroundColor: ["#FF6D37", "#232323"],
              borderColor: '#FF4500',
              fill: false,
            }
          ]
        }}

      options={{
          responsive: true,
          aspectRatio: 1,
          maintainAspectRatio: false
        }}
      />
    </div>
  )
};