import React from "react";
import { connect } from 'react-redux'

const ScoreCardChart = (props) => {

  console.log('this is now props', props)
  return (
    <>
      <h1></h1>
    </>
  );
};
const mapStateToProps = state => {
  return {
    report: state.report
  }
}
export default connect(mapStateToProps, {})(ScoreCardChart)