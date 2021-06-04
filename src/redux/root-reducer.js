import { combineReducers } from "redux";

import expeditionReducer from "./expedition/expedition.reducer";
import userReducer from "./user/user.reducer";

const rootReducer = combineReducers({
  expedition: expeditionReducer,
  user: userReducer,
});

export default rootReducer;
