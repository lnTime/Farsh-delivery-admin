import {combineReducers} from "redux";
import notificationReducer from "../notification/notificationReducer";

export const globalReducer = combineReducers({
    notification: notificationReducer,
});