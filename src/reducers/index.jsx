import {
  SET_TRANSIT_TYPE,
  GET_ROUTE,
  GET_COORDINATES,
  GET_REPORTS,
  GET_ROUTEREPORT,
  GET_DATE,
  SET_DATE_STATE,
  GET_ROUTE_REPORT,
  SET_ROUTE_REPORT,
  SET_ACTIVE_ROUTE
} from '../actions/index.jsx'


const initialState = {
  active: false,
  date: false,
  transit_type: [],
  routes: [],
  coordinates: [],
  report: {},
  isLoading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TRANSIT_TYPE:
      return {
        ...state, transit_type: [...state.transit_type, action.payload]
      }
    case GET_ROUTE:
      return {
        ...state, routes: [...state.routes, action.payload]
      }

    case GET_COORDINATES:
      return {
        ...state, coordinates: [...state.coordinates, action.payload]
      }

    case GET_REPORTS:
      return {
        ...state, report: action.payload
      }

    case GET_ROUTEREPORT:
      return {
        ...state, report: action.payload, active: false
      }
    case GET_DATE:
      return {
        ...state, report: action.payload
      }

    case SET_DATE_STATE:
      return {
        ...state, date: action.payload
      }

    case GET_ROUTE_REPORT:
      return {
        ...state, routes: action.payload
      }

    case SET_ROUTE_REPORT:
      return {
        ...state, report: action.payload
      }

    case SET_ACTIVE_ROUTE:
      return {
        ...state, active: action.payload
      }

    default:
      return state;
  }
}

export default reducer;