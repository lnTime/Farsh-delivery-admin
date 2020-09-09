import { createSelector } from "reselect";

export const getDriversSelector = state => state.drivers;
export const getDriverListSelector = createSelector(
    getDriversSelector,
    drivers => drivers.driverList
)
export const getDriversViewSelector = createSelector(
    getDriversSelector,
    drivers => drivers.view
)