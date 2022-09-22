import { combineReducers } from "redux";

import dashboardReducer from "modules/dashboard/store/reducer";

const rootReducer = combineReducers({
  dashboard: dashboardReducer,
});

export default rootReducer;
