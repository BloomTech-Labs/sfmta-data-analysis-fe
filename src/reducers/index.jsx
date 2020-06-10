import { SET_TRANSIT_TYPE } from '../actions/index.jsx'
import { GET_ROUTE } from '../actions/index.jsx'
import { GET_COORDINATES } from '../actions/index.jsx'
import { GET_REPORTS } from '../actions/index.jsx' 

const initialState = {
  transit_type: [],
  routes: [],
  coordinates: [],
  active: {
    route_type: '',
    date: '',
    num_bunches: 0,
    num_gaps: 0,
    on_time: 0,
    coverage: 0,
    bunches_array: [],
    gaps_array: [],
  },
  isLoading: false
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
        state
      }  

    default:
      return state;
  }
}

export default reducer;