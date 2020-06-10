import { SET_TRANSIT_TYPE } from '../actions/index.jsx'
import { GET_ROUTE } from '../actions/index.jsx'
import { GET_COORDINATES } from '../actions/index.jsx'

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
    coverage: 0
  },
  isLoading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TRANSIT_TYPE:
      return {
        ...state, type: {
          ...state.type, transit_type: [...state.type.transit_type, action.payload]
        }
      }
    case GET_ROUTE:
      return {
        ...state, type: {
          ...state.type, routes: [...state.type.routes, action.payload]
        }
      }

    case GET_COORDINATES:
      return {
        ...state, type: {
          ...state.type, coordinates: [...state.type.coordinates, action.payload]
        }
      }
    default:
      return state;
  }
}

export default reducer;