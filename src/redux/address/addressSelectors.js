import {createSelector} from "reselect";


export const getAddressSelector = state => state.address;

export const getCountriesSelector = createSelector(getAddressSelector,
  (address) => address.countries);

export const getStatesSelector = createSelector(getAddressSelector,
  address => address.states);

export const getCitiesSelector = createSelector(getAddressSelector,
  address => address.cities);

