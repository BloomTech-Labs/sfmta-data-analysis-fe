import axios from'axios'

export const FETCH_ROUTES = "FETCH_ROUTES"

export const fetchRoutes = () => dispatch => {
    dispatch({ type: FETCH_Routes});
}