import { globalErrorHandler } from "../common/helpers/global-error-handler";
import { addressConstants } from "./addressConstants";

export const setAuthToken = (authToken) => ({ type: addressConstants.SET_AUTH_TOKEN, payload: authToken });

export const setCountries = (countries) => ({ type: addressConstants.SET_COUNTRIES, payload: countries });

export const setStates = (states) => ({ type: addressConstants.SET_STATES, payload: states });

export const setCities = (cities) => ({ type: addressConstants.SET_CITIES, payload: cities });

export const getCountries = () => (dispatch) => {
    const countries = [ { value: 'Saudi Arabia', id: 'SA' } ];
    dispatch(setCountries(countries));
}


export const getStates = (countryName) => async (dispatch) => {
    const regions = await localStorage.getItem('regions');
    if (regions) {
        const parsed = JSON.parse(regions);
        dispatch(setStates(parsed));
        dispatch(getCities(+parsed[0].Id));
    } else {
        fetch(`https://apina.address.gov.sa/NationalAddress/v3.1/lookup/regions?language=E&format=JSON&api_key=e1f2536e470a4b428220bcffb05674dc`)
        .then(res => res.json())
        .then(res => {
            if (res.statusCode < 200 || res.statusCode > 300) {
                dispatch(globalErrorHandler(res));
                return;
            }

            const regions = res['Regions'];
            const transformed = regions.map(value => ({ id: +value.Id, value: value.Name }));
            localStorage.setItem('regions', JSON.stringify(transformed));
            dispatch(setStates(transformed));
        });
    }
}

export const getStateById = (stateId) => {
    const regions = localStorage.getItem('regions');
    if (regions) {
        const parsed = JSON.parse(regions);
        const option = parsed.find(i => i.id === stateId);
        return option;
    } else
        return {};
}

export const getCities = (stateId) => async (dispatch) => {
    if (isNaN(stateId))
        return;

    const cities = await localStorage.getItem('cities');
    if (cities) {
        const parsed = JSON.parse(cities);
        dispatch(setCities(parsed))
    } else {
        fetch(`https://apina.address.gov.sa/NationalAddress/v3.1/lookup/cities?format=JSON&regionid=${stateId}&language=E&api_key=e1f2536e470a4b428220bcffb05674dc`)
        .then(res => res.json())
        .then(res => {
            if (res.statusCode < 200 || res.statusCode > 300) {
                dispatch(globalErrorHandler(res));
                return;
            }
            const cities = res['Cities'];
            const transformed = cities.map(item => ({ value: item.Name, id: item.Id}));
            localStorage.setItem('cities', JSON.stringify(transformed));
            dispatch(setCities(transformed))
        })
    }
}

export const getCountryNameByISOCode = (countries, isoCode) => {
    return countries.find(country => country.id === isoCode).value;
}
