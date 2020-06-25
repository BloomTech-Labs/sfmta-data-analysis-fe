import React from "react";
import { connect } from "react-redux";
import { hover, Hover } from '../hover'
export function Coverage(props) {
  return (
    <div className="metrics cov">
      <Hover sentence={'This is the percentage of the route being served at least as often as planned -- any section of route without a gap is considered "covered"'} />
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
