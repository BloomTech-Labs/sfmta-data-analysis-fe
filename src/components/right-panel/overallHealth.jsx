import React from "react";
import { connect } from 'react-redux';
import { Hover } from '../hover'

export const ScoreCardChart = (props) => {
  return (
    <div className='metrics'>
      <Hover sentence={'This is a composite score of our other metrics. it measures how well the route did for the day overall'} />
      <h2 className='title'>Health</h2>
      <h1 className='contenthealth'>{props.overall_health}%</h1>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    overall_health: state.report.overall_health
  }
}

export default connect(mapStateToProps, {})(ScoreCardChart)