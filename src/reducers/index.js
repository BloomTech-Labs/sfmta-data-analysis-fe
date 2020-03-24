import {
    FETCH_ALL_ROUTES_LOADING,
    FETCH_ALL_ROUTES_SUCCESS,
    FETCH_ALL_ROUTES_FAILED
  } from "../actions/index.js";
  
  const initialState = {
    allroutes: [],
    error: '',
    isFetching: false
  };
  
  const reducer = (state = initialState, action) => {
    console.log("reducer", action);
    switch (action.type) {
      case FETCH_ALL_ROUTES_LOADING:
        return {
          ...state,
          isFetching: true,
        };
      case FETCH_ALL_ROUTES_SUCCESS:
        return {
          ...state,
          allroutes: action.payload,
          isFetching: false,
          
        };
      case FETCH_ALL_ROUTES_FAILED:
        return {
          ...state,
          isFetching: false,
          error: action.payload
        };
      default:
        return state;
    }
  }
  
  export default reducer;