import axios from 'axios'
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from 'react/cjs/react.development';

// //datadriventransit-env.eba-f6pyasyj.us-east-1.elasticbeanstalk.com/

export const GET_DATE = "GET_DATE";
export const SET_TRANSIT_TYPE = "SET_TRANSIT_TYPE";
export const GET_ROUTE = "GET_ROUTE";
export const GET_COORDINATES = "GET_COORDINATES";
export const GET_REPORTS = "GET_REPORTS";
export const GET_ROUTEREPORT = "GET_ROUTEREPORT";
export const GET_ROUTE_LIST = "GET_ROUTE_LIST";
export const SET_DATE_STATE = "SET_DATE_STATE";
export const GET_ROUTE_REPORT = "GET_ROUTE_REPORT";
export const SET_ROUTE_REPORT = "SET_ROUTE_REPORT";


export const getType = () => dispatch => {
    axios.get("https://be.datadriventransit.org/api/type")
        .then(res => {
            dispatch({ type: SET_TRANSIT_TYPE, payload: res.data })
        })
        .catch(error => {
            console.log(error, "cant get data");
        })
}

export const sendType = param => dispatch => {
    axios.post("https://be.datadriventransit.org/api/route", param)
        .then(res => {
            dispatch({ type: GET_ROUTE, payload: res.data })
        })
        .catch(error => {
            console.log(error.message, "cant send data")
        })
}

export const getCoordinates = id => dispatch => {
    axios.get(`https://be.datadriventransit.org/api/route/${id}`)
        .then(res => {
            dispatch({ type: GET_COORDINATES, payload: res.data })
        })
        .catch(error => {
            console.log(error, "couldnt get coord")
        })
}

export const getReport = () => dispatch => {
    axios.get('https://be.datadriventransit.org/api/report')
        .then(res => {
            dispatch({ type: GET_REPORTS, payload: res.data })
        })
        .catch(error => {
            console.log(error, "couldn't get report")
        })
}

export const getRoutereport = (param) => dispatch => {
    axios.post('https://be.datadriventransit.org/api/report/type', param)
        .then(res => {
            dispatch({ type: GET_ROUTEREPORT, payload: res.data })
        })
        .catch(error => {
            console.log(error, "couldn't get route type report")
        })
}

export const getDate = (param) => dispatch => {
    axios.post('https://be.datadriventransit.org/api/report/type/api/report/date', param)
        .then(res => {
            console.log(res, "get report by date");
            dispatch({ type: GET_DATE, paylood: res.data })
        })
        .catch(error => {
            console.log(error, "couldnt get report by date")
        })
}

export const setDate = (date) => dispatch => {
    dispatch({ type: SET_DATE_STATE, payload: date })
}

export const getRouteList = (object) => dispatch => {
    axios.post('https://be.datadriventransit.org/api/route-report/', object)
        .then(res => {
            console.log('happy', res)
            dispatch({ type: GET_ROUTE_REPORT, payload: res.data })
        })
        .catch(err => {
            console.log(err.message, 'sad')
        })
}

export const setRouteReport = (report) => dispatch => {
    dispatch({ type: SET_ROUTE_REPORT, payload: report })
}