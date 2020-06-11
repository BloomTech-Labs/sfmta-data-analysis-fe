import React from "react";
import { connect } from 'react-redux'

export const ScoreCardChart = () => {

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
