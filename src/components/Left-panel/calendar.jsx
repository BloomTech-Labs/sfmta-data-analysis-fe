import React, { useState, useEffect } from "../../../node_modules/react";
import Calendar from "../../../node_modules/react-calendar";
import './calendarStyles.css';
import { connect } from "react-redux";
import { setDate } from '../../actions/index'

export const SfmtaCalendar = (props) => {
  const [date, setDate] = useState(props.report.date);

  const onChange = date => {
    setDate(date)
    props.setDate(date.toISOString().substring(0, 10))
  }

  return (
    <div className="metrics">
      <Calendar calendarType="ISO 8601" onChange={onChange} />
    </div>
  );
}

// export default SfmtaCalendar;

const mapStateToProps = state => {
  return {
    report: state.report,
  }
}
export default connect(mapStateToProps, { setDate })(SfmtaCalendar)


