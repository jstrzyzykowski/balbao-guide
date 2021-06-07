import { combineReducers } from "redux";

import expeditionReducer from "./expedition/expedition.reducer";
import landingFormReducer from "./landing-form/landing-form.reducer";
import pageHeaderReducer from "./page-header/page-header.reducer";
import userReducer from "./user/user.reducer";

const rootReducer = combineReducers({
  expedition: expeditionReducer,
  user: userReducer,
  pageHeader: pageHeaderReducer,
  landingForm: landingFormReducer,
});

export default rootReducer;
