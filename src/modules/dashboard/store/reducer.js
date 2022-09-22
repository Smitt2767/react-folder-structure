const initialState = {};

const dashboardReducer = (state = initialState, action) => {
  const { type, payload } = action;

  console.log(payload);

  switch (type) {
    default:
      return state;
  }
};

export default dashboardReducer;
