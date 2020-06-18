import React from "react";
import { connect } from 'react-redux';

export const ScoreCardChart = (props) => {
  return (
    <div className='metrics'>
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