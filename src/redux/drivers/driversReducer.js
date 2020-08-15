import { driversConstants } from "./driversConstants";

const initialState = [];

export const driversReducer = (state = initialState, action) => {
    switch (action.type) {
        case driversConstants.SET_DRIVERS:
            return action.payload;
        default:
            return state;
    }
}