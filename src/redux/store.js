import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {reducer as formReducer} from "redux-form";
import thunkMiddleware from "redux-thunk";
import { addressReducer } from './address/addressReducer';
import { driverReducer } from "./driver/driverReducer";
import { driversReducer } from './drivers/driversReducer';

let reducers = combineReducers({
    form: formReducer,
    address: addressReducer,
    driver: driverReducer,
    drivers: driversReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(
    applyMiddleware(thunkMiddleware),
));

export default store;