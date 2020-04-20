import {
    FETCH_ROUTESINFO_LOADING,
    FETCH_ROUTESINFO_SUCCESS,
    FETCH_ROUTESINFO_FAILED,
    FETCH_TYPEROUTE_LOADING,
    FETCH_TYPEROUTE_SUCCESS,
    FETCH_TYPEROUTE_FAILED
  } from "../actions/index.jsx";
  
  const initialState = {
    routesInfo: {},
    typeAndRouteInfo: {},
    error: '',
    isFetching: false,
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_ROUTESINFO_LOADING:
        return {
          ...state,
          isFetching: true,
        }
      case FETCH_ROUTESINFO_SUCCESS:
        return {...state, routesInfo: action.payload, isFetching: false};
      case FETCH_ROUTESINFO_FAILED:
        return {
          ...state,
          isFetching: false,
          error: action.payload
        };
      case FETCH_TYPEROUTE_LOADING:
          return{
            ...state,
            isFetching: true,
          }
      case FETCH_TYPEROUTE_SUCCESS:
          return{
            ...state,
            typeAndRouteInfo: action.payload,
            isFetching: false
          }
      case FETCH_TYPEROUTE_FAILED:
          return {
            ...state,
            isFetching: false,
            error: action.payload
          }
      default:
        return state;
    }
  }
  
  export default reducer;