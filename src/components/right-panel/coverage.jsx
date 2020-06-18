import React from "react";
import { connect } from "react-redux";

export function Coverage(props) {
  return (
    <div className="metrics cov">
      <h2 className="title">Coverage</h2>
      <h1 className="content">{props.coverage}%</h1>
    </div>
  );
}


const mapStateToProps = state => {
  return {
    coverage: state.report.coverage
  }
}
export default connect(mapStateToProps, {})(Coverage)

