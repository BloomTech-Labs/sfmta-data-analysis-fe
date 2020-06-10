import React from 'react';
import { Line } from 'react-chartjs-2'
import { connect } from 'react-redux';

function LineChart(props){
  console.log(props)
  return (
    <div className="line-chart">
      <Line 
        data={{
          datasets: [
            {
              data: {props.line_chart.gaps},
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
              fill: false
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

const mapStateToProps = state =>{
  console.log(state);
  return{
      line_chart: state.report.line_chart
  }
}

export default connect(mapStateToProps,{})(LineChart);

