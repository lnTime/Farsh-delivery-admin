import { addressConstants } from "./addressConstants";

const initialState = {
    countries: [],
    cities: [],
    states: [],
};

export const addressReducer = (state = initialState, action) => {
    switch (action.type) {
        case addressConstants.SET_AUTH_TOKEN:
            return {
                ...state,
                authToken: action.payload,
            };
        case addressConstants.SET_COUNTRIES:
            return {
                ...state,
                countries: action.payload,
            };
        case addressConstants.SET_STATES:
            return {
                ...state,
                states: action.payload,
            };
        case addressConstants.SET_CITIES:
            return {
                ...state,
                cities: action.payload
            }
        default:
            return state;
    };
}