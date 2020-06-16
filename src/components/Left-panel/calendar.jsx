import React, {useState, useEffect} from "../../../node_modules/react";
import Calendar from "../../../node_modules/react-calendar";
import './calendarStyles.css';


const SfmtaCalendar = () => {
const [date, setDate] = useState(new Date());
const onChange =  date => {
  setDate(date)
console.log('this is the date', date)
}
 
return(
<div className="metrics">
 <Calendar calendarType="ISO 8601" onChange={onChange} value={date}/>
</div>
  );
}

export default SfmtaCalendar;




