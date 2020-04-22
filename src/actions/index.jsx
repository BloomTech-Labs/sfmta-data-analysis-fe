import axios from'axios'

export const FETCH_ROUTESINFO_LOADING = "FETCH_ROUTESINFO_LOADING"
export const FETCH_ROUTESINFO_SUCCESS = "FETCH_ROUTESINFO_SUCCESS"
export const FETCH_ROUTESINFO_FAILED = "FETCH_ROUTESINFO_FAILED"

export const FETCH_TYPEROUTE_LOADING = "FETCH_TYPEROUTE_LOADING"
export const FETCH_TYPEROUTE_SUCCESS = "FETCH_TYPEROUTE_SUCCESS"
export const FETCH_TYPEROUTE_FAILED = "FETCH_TYPEROUTE_FAILED"

export const FETCH_REALTIME_SUCCESS = "FETCH_REALTIME_SUCCESS"
export const FETCH_REALTIME_FAILED = "FETCH_REALTIME_FAILED"

export const fetchRoutesInfo = (routeID) => dispatch => {
    dispatch({type: FETCH_ROUTESINFO_LOADING})
    return axios
    .get(`https://sfmta-test.herokuapp.com/type-map?id=${routeID}`)
    .then(res => {
        dispatch({type: FETCH_ROUTESINFO_SUCCESS, payload: res.data})
        return res.data
    })
    .catch(err => {
        dispatch({type: FETCH_ROUTESINFO_FAILED, payload: err.response})
    })
}

export const fetchTypeAndRoute = (props) => dispatch => {
    dispatch({type: FETCH_TYPEROUTE_LOADING})
    return axios
    .get(`https://sfmta-test.herokuapp.com/routes-info`)
    .then(res => {
        dispatch({type: FETCH_TYPEROUTE_SUCCESS, payload: res.data})
        return res.data
    })
    .catch(err => {
        dispatch({type: FETCH_TYPEROUTE_FAILED, payload: err.response})
    })

}

export const fetchRealTime = (realTime) => dispatch => {
    return axios
    .get(`https://sfmta-test.herokuapp.com/real-time?id=${realTime}`)
    .then(res => {
        console.log("realtime", realTime)
        dispatch({type: FETCH_REALTIME_SUCCESS, payload: res.data})
        console.log('real time', res.data)
        return res.data
    })
    .catch(err => {
        dispatch({type: FETCH_REALTIME_FAILED, payload: err.response})
    })
}