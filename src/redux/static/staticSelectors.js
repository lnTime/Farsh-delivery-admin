import {createSelector} from "reselect";

export const getStaticSelector = (state) => state.staticReducer;

export const getVehicleMakesSelector = createSelector(getStaticSelector,
  (staticReducer) => staticReducer.vehicle?.vehicleMakes);

export const getRealNameIssuingAuthoritiesSelector = createSelector(getStaticSelector,
  (staticReducer) => staticReducer.realName?.issuingAuthority);

export const getDrivingLicenseTypesSelector = createSelector(getStaticSelector,
  (staticReducer) => staticReducer.drivingLicense?.types);

export const getDrivingLicenseIssuingAuthoritySelector = createSelector(getStaticSelector,
  (staticReducer) => staticReducer.drivingLicense?.issuingAuthority);

export const getVehicleTypesSelector = createSelector(getStaticSelector,
  (staticReducer) => staticReducer.vehicle?.vehicleTypes);

export const getVehicleBrandsSelector = createSelector(getStaticSelector,
  (staticReducer) => staticReducer.vehicle?.vehicleBrands);
