import axios from 'axios'

// http://datadriventransit-env.eba-f6pyasyj.us-east-1.elasticbeanstalk.com/

export const SET_DATE = "SET_DATE";
export const SET_TRANSIT_TYPE = "SET_TRANSIT_TYPE";

export const getType = () => dispatch => {
    axios.get("http://datadriventransit-env.eba-f6pyasyj.us-east-1.elasticbeanstalk.com/api/type")
        .then(res => {
            console.log(res);
            dispatch({ type: SET_TRANSIT_TYPE })
        })
        .catch(error => {
            console.log(error, "cant get data");
        })
}
