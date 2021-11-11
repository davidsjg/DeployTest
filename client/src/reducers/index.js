import { combineReducers } from "redux";
import postReducer from "./post";

const allReducers = combineReducers({
  poster: postReducer,
});

export default allReducers;
