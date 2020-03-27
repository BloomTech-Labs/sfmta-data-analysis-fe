import axios from'axios'

export const FETCH_ALL_ROUTES_LOADING = "FETCH_ALL_ROUTES_LOADING"
export const FETCH_ALL_ROUTES_SUCCESS = "FETCH_ALL_ROUTES_SUCCESS"
export const FETCH_ALL_ROUTES_FAILED = "FETCH_ALL_ROUTES_FAILED"

export const fetchRoutes = (type) => dispatch => {
    dispatch({ type: FETCH_ALL_ROUTES_LOADING});
    axios
    .get(`https://sfmta-test.herokuapp.com/type-map?type=${type}`)
    .then(res => {
        console.log("resData",res.data)
        dispatch({type:FETCH_ALL_ROUTES_SUCCESS, payload: res.data.results})
    })
    .catch(err => {
        dispatch({type: FETCH_ALL_ROUTES_FAILED, payload: err.response})
    })
}

export const FETCH_LAYOUTS_LOADING = "FETCH_LAYOUTS_LOADING"
export const FETCH_LAYOUTS_SUCCESS = "FETCH_LAYOUTS_SUCCESS"
export const FETCH_LAYOUTS_FAILED = "FETCH_LAYOUTS_FAILED"

export const fetchLayouts = (type) => dispatch => {
    dispatch({ type: FETCH_LAYOUTS_LOADING});
    axios
    .get(`https://sfmta-test.herokuapp.com/type-map?type=${type}`)
    .then(res => {
        console.log("layout", res.data.layout)
        dispatch({type:FETCH_LAYOUTS_SUCCESS, payload: res.data.layout})
    })
    .catch(err => {
        dispatch({type: FETCH_LAYOUTS_FAILED, payload: err.response})
    })
}

export const FETCH_NAMES_LOADING = "FETCH_NAMES_LOADING"
export const FETCH_NAMES_SUCCESS = "FETCH_NAMES_SUCCESS"
export const FETCH_NAMES_FAILED = "FETCH_NAMES_FAILED"

export const fetchNames = (type) => dispatch => {
    dispatch({ type: FETCH_NAMES_LOADING});
    axios
    .get(`https://sfmta-test.herokuapp.com/type-map?type=${type}`)
    .then(res => {
        console.log("route names", res.data.names)
        dispatch({type:FETCH_NAMES_SUCCESS, payload: res.data.names})
    })
    .catch(err => {
        dispatch({type: FETCH_NAMES_FAILED, payload: err.response})
    })
}

export const TOGGLE_MODAL = 'TOGGLE_MODAL';

export const toggleModal = data => dispatch => {
    dispatch({type: TOGGLE_MODAL, payload: data})
}