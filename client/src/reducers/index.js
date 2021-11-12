import { combineReducers } from "redux";
import postReducer from "./poster";

const allReducers = combineReducers({
  poster: postReducer,
});

export default allReducers;
