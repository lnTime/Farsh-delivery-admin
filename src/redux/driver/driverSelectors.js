import { createSelector } from 'reselect'

export const vendorSelector = state => state.vendor;

export const realNameSelector = state => state.realName;

export const driverLicenseSelector = state => state.driverLicense;

export const vehicleSelector = state => state.vehicle;

export const getDriverSelector = state => state.driver;

export const getDriverIDSelector = state => state.driver?.id;

export const getProfileSelector = createSelector(
    getDriverSelector,
    driver => driver.profile
)

export const getNameSelector = createSelector(
    getProfileSelector,
    driver => `${driver.firstName} ${driver.lastName}`
);

export const getDrivingLicenseSelector = createSelector(
    getDriverSelector,
    driver => driver.drivingLicense
);

export const getVendorSelector = createSelector(
    getDriverSelector,
    driver => driver.vendor
);

export const getRealNameInformationSelector = createSelector(
    getDriverSelector,
    driver => driver.realNameInformation
);

export const getVehicleSelector = createSelector(
    getDriverSelector,
    driver => driver.vehicle
)