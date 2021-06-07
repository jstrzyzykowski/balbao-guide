import { combineReducers } from "redux";

import expeditionReducer from "./expedition/expedition.reducer";
import pageHeaderReducer from "./page-header/page-header.reducer";
import userReducer from "./user/user.reducer";

const rootReducer = combineReducers({
  expedition: expeditionReducer,
  user: userReducer,
  pageHeader: pageHeaderReducer,
});

export default rootReducer;
