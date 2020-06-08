import axios from 'axios'

// http://datadriventransit-env.eba-f6pyasyj.us-east-1.elasticbeanstalk.com/

export const SET_DATE = "SET_DATE";
export const SET_TRANSIT_TYPE = "SET_TRANSIT_TYPE";
export const GET_ROUTE = "GET_ROUTE";
export const GET_COORDINATES = "GET_COORDINATES";


export const getType = () => dispatch => {
    axios.get("http://datadriventransit-env.eba-f6pyasyj.us-east-1.elasticbeanstalk.com/api/type")
        .then(res => {
            console.log(res.data);
            dispatch({ type: SET_TRANSIT_TYPE, payload: res.data })
        })
        .catch(error => {
            console.log(error, "cant get data");
        })
}

export const sendType = param => dispatch => {
    axios.post("http://datadriventransit-env.eba-f6pyasyj.us-east-1.elasticbeanstalk.com/api/route", param)
        .then(res => {
            console.log(res);
            dispatch({ type: GET_ROUTE })
        })
        .catch(error => {
            console.log(error, "cant send data")
        })
}

export const getCoordinates = id => dispatch => {
    axios.get(`http://datadriventransit-env.eba-f6pyasyj.us-east-1.elasticbeanstalk.com/api/route/${id}`)
        .then(res => {
            console.log(res);
            dispatch({ type: GET_COORDINATES })
        })
        .catch(error => {
            console.log(error, "couldnt get coord")
        })
}