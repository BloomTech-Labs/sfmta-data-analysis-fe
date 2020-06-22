import React from 'react';
import { Line } from 'react-chartjs-2'
import { connect } from "react-redux"

export function LineChart(props) {
  return (
    <div className="line-chart">
      <Line
        data={{
          labels: props.line_chart ? props.line_chart.times : null,
          datasets: [
            {
              data: props.line_chart ? props.line_chart.gaps : null,
              label: '# gapped',
              backgroundColor: ["#FBD03F", "#40FFCE"],
              borderColor: '#40FFCE', 
              fill: false,
            },
            {
              data: props.line_chart ? props.line_chart.bunches : null,
              label: '# bunches',
              backgroundColor: ["#FF6D37", "#232323"],
              borderColor: '#FF4500',
              fill: false
            }
          ]
        }}

        options={{
          responsive: true,
          aspectRatio: 1,
          maintainAspectRatio: false,
          scales: {
              yAxes: [{
                gridLines: {
                  display: true,
                  lineWidth: 3,
                  zeroLineWidth: 3,
                  zeroLineColor: "#40FFCE",
                  fontColor: "#40FFCE",
                  scaleLabel: {
                    fontColor: "#40FFCE"
                  }
                },
              ticks: {
                max: props.line_chart ? getMaxYValue(props.line_chart.gaps, props.line_chart.bunches) : 0,
                stepSize: 50,
                fontColor: "#40FFCE"
              }
            }],
            xAxes: [{
              gridLines: {
                display: true,
                lineWidth: 3,
                zeroLineWidth: 3,
                zeroLineColor: "#40FFCE",
                fontColor: "#40FFCE",
                scaleLabel: {
                  fontColor: "#40FFCE"
                }
              },
            ticks: {
              max: props.line_chart ? getMaxYValue(props.line_chart.gaps, props.line_chart.bunches) : 0,
              stepSize: 50,
              fontColor: "#40FFCE"      
            }
          }],
            
          }

        }}
      />
    </div>
  )
};

function getMaxYValue(gaps, bunches) {
  return Math.max(...gaps, ...bunches);
}

const mapStateToProps = state => {
  return {
    line_chart: state.report.line_chart
  }
}

export default connect(mapStateToProps, {})(LineChart);