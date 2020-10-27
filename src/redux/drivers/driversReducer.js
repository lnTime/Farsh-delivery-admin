import { driversConstants } from "./driversConstants";

const initialState = {
    pageNo: 2,
    pageSize: 10,
    view: [],
    driverList: []
};

export const driversReducer = (state = initialState, action) => {
    switch (action.type) {
        case driversConstants.SET_DRIVER_LIST:
            return {
                ...state,
                driverList: action.payload
            };
        case driversConstants.SET_DRIVERS_VIEW:
            return {
                ...state,
                view: action.payload
            }
        default:
            return state;
    }
}
