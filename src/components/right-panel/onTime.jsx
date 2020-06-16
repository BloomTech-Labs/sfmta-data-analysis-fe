import React from "react";
import { connect } from 'react-redux'

export function OnTimePercent(props) {

  return (
    <div className="metrics otp">
      <h2 className="title">On Time %</h2>
      <h1 className="contentontime">{props.report.on_time_percentage}%</h1>
    </div>
  );
}
const mapStateToProps = state => {
  return {
    report: state.report
  }
}
export default connect(mapStateToProps, {})(OnTimePercent)