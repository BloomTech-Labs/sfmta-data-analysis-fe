import React from "react";
import { connect } from 'react-redux';

export const ScoreCardChart = (props) => {

  console.log('This is scorecard', props)
  return (
    <div className='metrics'>
      <h2 className='title'>Health</h2>
     <h1 className='contenthealth'>{props.report.overall_health}%</h1>
     </div>
  );
};

const mapStateToProps = state => {
  return {
    report: state.report
  }
}

export default connect(mapStateToProps, {})(ScoreCardChart)