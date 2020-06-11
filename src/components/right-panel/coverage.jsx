import React from "react";
import { connect } from "react-redux";

function Coverage(props) {
  return (
    <div className="metrics cov">
      <h2 className="title">Coverage</h2>
      <h1 className="content">{props.report.coverage}%</h1>
    </div>
  );
}


const mapStateToProps = state => {
  return {
    report: state.report
  }
}
export default connect(mapStateToProps, {})(Coverage)
