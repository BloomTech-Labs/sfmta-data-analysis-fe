import { SET_TRANSIT_TYPE } from '../actions/index.jsx'

const initialState = {
  type: {
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
      return state
    default:
      return state;
  }
}

export default reducer;