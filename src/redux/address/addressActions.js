import { batch } from 'react-redux';
import { addressConstants } from "./addressConstants";

export const setAuthToken = (authToken) => ({ type: addressConstants.SET_AUTH_TOKEN, payload: authToken });

export const setCountries = (countries) => ({ type: addressConstants.SET_COUNTRIES, payload: countries });

export const setStates = (states) => ({ type: addressConstants.SET_STATES, payload: states });

export const setCities = (cities) => ({ type: addressConstants.SET_CITIES, payload: cities });

export const getAccessToken = () => async (dispatch) => {
    await fetch(`https://www.universal-tutorial.com/api/getaccesstoken`, {
        headers: {
            "api-token": "QWdjCYkyagktYqBerqWTK-De1JVS8v8dpp8OdivBirFjxLDaCbAeLlAaU2xYVrT_1kQ",
            "user-email": "yengibaryan.t@mail.ru"
        }
    }).then(res => res.json())
    .then(res => {
        dispatch(setAuthToken(res['auth_token']))
    });
}

export const getCountries = () => async (dispatch, getState) => {
    await dispatch(getAccessToken());
    const {authToken} = getState().address;

    dispatch(setCountries([{value: 'Loading countries', id: 0}]));
    fetch(`https://www.universal-tutorial.com/api/countries/`, {
        headers: {
            Authorization: `Bearer ${authToken}`
        }
    }).then(response => response.json())
    .then(res => {
        batch(() => {
            dispatch(setCountries(res.map(item => ({value: item['country_name'], id: item['country_short_name']}))));
        })
    });
}

export const getStates = (countryName) => async (dispatch, getState) => {
    const {authToken, countries} = getState().address;
    const country = countries.find(country => country.id === countryName);
    if(!country) {
        return;
    }

    dispatch(setStates([{id: '', value: 'Loading states'}]))
    fetch(`https://www.universal-tutorial.com/api/states/${country.value}`, {
        headers: {
            Authorization: `Bearer ${authToken}`
        }
    }).then(res => res.json()).then(res => {
        batch(() => {
            dispatch(setStates(res.map(item => ({ value: item['state_name'], id: item['state_name'] }))));
            dispatch(getCities(res[0]['state_name']));
        })
    });
}

export const getCities = (stateName) => (dispatch, getState) => {
    const {authToken} = getState().address;

    dispatch(setCities([{id: '', value: 'Loading cities'}]))
    fetch(`https://www.universal-tutorial.com/api/cities/${stateName}`, {
        headers: {
            Authorization: `Bearer ${authToken}`
        }
    }).then(res => res.json()).then(res => {
        dispatch(setCities(res.map(item => ({ value: item['city_name'], id: item['city_name']}))))
    });
}

export const getCountryNameByISOCode = (countries, isoCode) => {
    return countries.find(country => country.id === isoCode).value;
}
