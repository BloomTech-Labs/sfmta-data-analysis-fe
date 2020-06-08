import { SET_TRANSIT_TYPE } from '../actions/index.jsx'
import { GET_ROUTE } from '../actions/index.jsx'

const initialState = {
  type: {
    transit_type: [],
    routes: [],
    features: [
      {
        type: '',
        geometry: {
          type: '',
          coordinates: []
        }
      }
    ]
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
    default:
      return state;
  }
}

export default reducer;