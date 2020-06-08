
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
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    default:
      return state;
  }
}

export default reducer;