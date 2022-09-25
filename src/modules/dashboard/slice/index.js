import { createSlice } from "@reduxjs/toolkit";

const dashboardState = {
  loading: false,
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: dashboardState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setLoading } = dashboardSlice.actions;

export default dashboardSlice.reducer;
