import React from "react";
import { connect } from 'react-redux'

export const ScoreCardChart = () => {

  return (
    <div>
      <h2 className='title'>Health</h2>
     <h1 className='contenthealth'>80%</h1>
     </div>
  );
};

const mapStateToProps = state => {
  return {
    report: state.report
  }
}
export default connect(mapStateToProps, {})(ScoreCardChart)
