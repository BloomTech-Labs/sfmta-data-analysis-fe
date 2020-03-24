import axios from'axios'

export const FETCH_ALL_ROUTES_LOADING = "FETCH_ALL_ROUTES_LOADING"
export const FETCH_ALL_ROUTES_SUCCESS = "FETCH_ALL_ROUTES_SUCCESS"
export const FETCH_ALL_ROUTES_FAILED = "FETCH_ALL_ROUTES_FAILED"

export const fetchRoutes = () => dispatch => {
    dispatch({ type: FETCH_ALL_ROUTES_LOADING});
    axios
    .get('https://sfmta-test.herokuapp.com/all-routes')
    .then(res => {
        console.log("resData", res.data.traces)
        dispatch({type:FETCH_ALL_ROUTES_SUCCESS, payload: res.data.traces})
    })
    .catch(err => {
        dispatch({type: FETCH_ALL_ROUTES_FAILED, payload: err.response})
    })
}