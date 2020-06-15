import React from "react";
import { connect } from 'react-redux'

export const ScoreCardChart = ({ report }) => {

// console.log('this is now props', report.data.overall_health)
  return (
    <>
      {report && <>
      <h1>{report.data.overall_health}</h1>
      </>
      }
     {/* <h1>{props.report.overall_health} </h1> */}
    </>
  );
};
const mapStateToProps = state => {
  return {
    report: state.report
  }
}
export default connect(mapStateToProps, {})(ScoreCardChart)