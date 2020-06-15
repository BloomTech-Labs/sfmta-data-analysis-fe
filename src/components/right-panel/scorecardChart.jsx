import React from "react";
import { connect } from 'react-redux'

export const ScoreCardChart = (props) => {

  console.log('This is scorecard', props)
  return (
    <>
     <h1>80%</h1>
    </>
  );
};

const mapStateToProps = state => {
  return {
    report: state.report
  }
}
export default connect(mapStateToProps, {})(ScoreCardChart)