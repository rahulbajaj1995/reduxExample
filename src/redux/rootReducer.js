import { combineReducers } from "redux";
import { apiReducer } from "./reducers/apiReducer";

export default combineReducers({
    apiReducer: apiReducer
});