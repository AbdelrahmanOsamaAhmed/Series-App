import PageReducer from "./Reducer";
import { combineReducers } from "redux";

const rootReducers = combineReducers({ favourites: PageReducer });

export default rootReducers;
