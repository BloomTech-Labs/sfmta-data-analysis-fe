import React, { useState, useEffect } from "../../../node_modules/react";
import Calendar from "../../../node_modules/react-calendar";
import './calendarStyles.css';
import { connect } from "react-redux";


const SfmtaCalendar = (props) => {
  console.log(props.report)
  const [date, setDate] = useState(props.report.date);
  const onChange = date => {
    setDate(date)

  }

  return (
    <div className="metrics">
      <Calendar calendarType="ISO 8601" onChange={onChange} defaultValue={date} />
    </div>
  );
}

// export default SfmtaCalendar;

const mapStateToProps = state => {
  return {
    report: state.report
  }
}
export default connect(mapStateToProps, {})(SfmtaCalendar)


