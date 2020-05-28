import React, {useState, useEffect} from "react";
import Calendar from "react-calendar";
import './calendarStyles.css';

const axios = require('axios')

const SfmtaCalendar = () => {
const [date, setDate] = useState(new Date());
const onChange =  date => {
  setDate(date)

}
 
return(
<div>
 <Calendar calendarType="ISO 8601" onChange={onChange} value={date}/>
</div>
  );
}

export default SfmtaCalendar


// const axios = require('axios')
// useEffect(()=> {
//     console.log(date)
//     axios.post('http://datadrivebackend-env.eba-hamsdfmd.us-west-2.elasticbeanstalk.com/date', date.toISOString())
// .then((res) => {
//     console.log(res)
// }
// )
// }, [date])

