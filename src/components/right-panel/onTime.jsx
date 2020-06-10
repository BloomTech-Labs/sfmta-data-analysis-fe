import React from "react";
import { connect } from 'react-redux'

function OnTimePercent(props) {
  console.log(props, 'ontimeProps')
  return (
    <div className="metrics otp">
      <h2 className="title">On Time %</h2>
      <h1 className="content">{props.report.coverage}%</h1>
    </div>
  );
}
const mapStateToProps = state => {
  return {
    report: state.report
  }
}
export default connect(mapStateToProps, {})(OnTimePercent)
