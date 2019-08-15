import { combineReducers } from "redux";
import navbarReducer from "./navbarReducer";

export default combineReducers({
    nav: navbarReducer,
});