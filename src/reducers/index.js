import {
    FETCH_ALL_ROUTES_LOADING,
    FETCH_ALL_ROUTES_SUCCESS,
    FETCH_ALL_ROUTES_FAILED,
    FETCH_LAYOUTS_LOADING,
    FETCH_LAYOUTS_SUCCESS,
    FETCH_LAYOUTS_FAILED,
    FETCH_NAMES_LOADING,
    FETCH_NAMES_SUCCESS,
    FETCH_NAMES_FAILED,
    FETCH_ROUTESINFO_LOADING,
    FETCH_ROUTESINFO_SUCCESS,
    FETCH_ROUTESINFO_FAILED
  } from "../actions/index.js";
  
  const initialState = {
    allroutes: [],
    layout: [],
    names: [],
    routesInfo: {},
    error: '',
    isFetching: false
  };
  
  const reducer = (state = initialState, action) => {
    console.log("reducer", action);
    switch (action.type) {
      case FETCH_ALL_ROUTES_LOADING:
        return {...state, isFetching: true};
      case FETCH_ALL_ROUTES_SUCCESS:
        return {...state, allroutes: action.payload, layout: action.payload, names: action.payload, isFetching: false};
      case FETCH_ALL_ROUTES_FAILED:
        return {...state, isFetching: false, error: action.payload};
      case FETCH_LAYOUTS_LOADING:
        return {...state, isFetching: true};
      case FETCH_LAYOUTS_SUCCESS:
        return {...state, layout: action.payload, isFetching: false};
      case FETCH_LAYOUTS_FAILED:
        return {...state, isFetching: false, error: action.payload};
      case FETCH_NAMES_LOADING:
        return {...state, isFetching: true};
      case FETCH_NAMES_SUCCESS:
        return {...state, names: action.payload, isFetching: false};
      case FETCH_NAMES_FAILED:
        return {...state, isFetching: false, error: action.payload};
      case FETCH_ROUTESINFO_LOADING:
        return {...state, isFetching: true};
      case FETCH_ROUTESINFO_SUCCESS:
        return {...state, routesInfo: action.payload, isFetching: false};
      case FETCH_ROUTESINFO_FAILED:
        return {...state, isFetching: false, error: action.payload};
      default:
        return state;
    }
  }
  
  export default reducer;