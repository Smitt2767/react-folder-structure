import { combineReducers } from "@reduxjs/toolkit";

import dashboardReducer from "modules/dashboard/slice";

const reducer = combineReducers({
  dashboard: dashboardReducer,
});

export default reducer;
