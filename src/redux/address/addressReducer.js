import { addressConstants } from "./addressConstants";

const initialState = {
    countries: [ { value: 'Saudi Arabia', id: 'SA', } ],
    cities: [ {value: 'Please select the state', id: 0} ],
    states: [ {value: 'Please select the country', id: 0} ],
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
