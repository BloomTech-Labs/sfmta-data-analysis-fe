import React, {useState, useEffect} from "../../../node_modules/react";
import Calendar from "../../../node_modules/react-calendar";
import './calendarStyles.css';


const SfmtaCalendar = () => {
const [date, setDate] = useState(new Date());
const onChange =  date => {
  setDate(date)

}
 
return(
<div className="metrics">
 <Calendar calendarType="ISO 8601" onChange={onChange} value={date}/>
</div>
  );
}

export default SfmtaCalendar;


// const axios = require('axios')
// useEffect(()=> {
//     console.log(date)
//     axios.post('http://datadrivebackend-env.eba-hamsdfmd.us-west-2.elasticbeanstalk.com/date', date.toISOString())
// .then((res) => {
//     console.log(res)
// }
// )
// }, [date])

