import { addressConstants } from "./addressConstants";
import csc from "country-state-city";

export const setAuthToken = (authToken) => ({ type: addressConstants.SET_AUTH_TOKEN, payload: authToken });

export const setCountries = (countries) => ({ type: addressConstants.SET_COUNTRIES, payload: countries });

export const setStates = (states) => ({ type: addressConstants.SET_STATES, payload: states });

export const setCities = (cities) => ({ type: addressConstants.SET_CITIES, payload: cities });

export const getCountries = () => (dispatch) => {
    const countries = csc.getAllCountries();
    dispatch(setCountries(countries.map(item => ({value: item['name'], id: item['sortname']}))));
}

export const getStates = (countryName) => async (dispatch) => {
    const countries = csc.getAllCountries();
    const country = countries.find(item => item.sortname === countryName);
    const states = csc.getStatesOfCountry(country.id);
    dispatch(setStates(states.map(value => ({ id: `${value.id}-${value.name}`, value: value.name }))));
    dispatch(getCities(`${states[0].id}-${states[0].name}`));
}

export const getCities = (stateId) => (dispatch, getState) => {
    const firstPart = stateId.split("-")[0];
    const cities = csc.getCitiesOfState(firstPart);
    dispatch(setCities(cities.map(item => ({ value: item.name, id: item.name}))))
}

export const getCountryNameByISOCode = (countries, isoCode) => {
    return countries.find(country => country.id === isoCode).value;
}
