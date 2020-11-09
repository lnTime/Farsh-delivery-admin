import {API} from "../../API";
import {getOptions} from "../driver/driverHelpers";
import {globalErrorHandler} from "../common/helpers/global-error-handler";
import staticConstants from "./staticConstants";

const setVehicleMakes = (vehicleMakes) => ({ type: staticConstants.STATIC_VEHICLE_VEHICLE_MAKES, payload: { vehicleMakes } });

const setRealNameIssuingAuthorities = (issuingAuthority) =>
  ({ type: staticConstants.STATIC_REAL_NAME_ISSUING_AUTHORITY, payload: { issuingAuthority } });

const setDrivingLicenseTypes = (types) => ({ type: staticConstants.STATIC_SET_DRIVING_LICENSE_TYPES, payload: { types }});

const setDrivingLicenseIssuingAuthority = (issuingAuthority) =>
  ({ type: staticConstants.STATIC_SET_DRIVING_LICENSE_ISSUING_AUTHORITY, payload: { issuingAuthority } });

const setVehicleTypes = (vehicleTypes) =>
  ({ type: staticConstants.STATIC_VEHICLE_VEHICLE_TYPES, payload: { vehicleTypes } });

const setVehicleBrands = (vehicleBrands) =>
  ({ type: staticConstants.STATIC_VEHICLE_VEHICLE_BRANDS, payload: { vehicleBrands } });

export const getVehicleMakes = () => dispatch => {
  API.get(`static/vehicle/vehicle-makes`)
    .then(({ data }) => {
      const vehicleMakes = getOptions(data);
      dispatch(setVehicleMakes(vehicleMakes));
    }).catch(err => dispatch(globalErrorHandler(err)));
}

export const getIssuingAuthorities = () => dispatch => {
  API.get(`static/real-name/issuing-authority`)
    .then(({ data }) => {
      const issuingAuthorities = getOptions(data);
      dispatch(setRealNameIssuingAuthorities(issuingAuthorities))
    }).catch(err => dispatch(globalErrorHandler(err)));
}

export const getDrivingLicenseTypes = () => dispatch => {
  API.get(`static/driving-license/types`)
    .then(({ data }) => {
      const types = getOptions(data);
      dispatch(setDrivingLicenseTypes(types));
    }).catch(err => dispatch(globalErrorHandler(err)));
}

export const getDrivingLicenseIssuingAuthority = () => dispatch => {
  API.get(`static/driving-license/issuing-authority`)
    .then(({ data }) => {
      const issuingAuthority = getOptions(data);
      dispatch(setDrivingLicenseIssuingAuthority(issuingAuthority));
    }).catch(err => dispatch(globalErrorHandler(err)));
}

export const getVehicleTypes = () => (dispatch) => {
  API.get(`static/vehicle/vehicle-types`)
    .then(({data}) => {
      const types = getOptions(data);
      dispatch(setVehicleTypes(types));
    });
}

export const getVehicleBrands = () => (dispatch) => {
  API.get(`static/vehicle/vehicle-brands`)
    .then(({data}) => {
      const brands = getOptions(data);
      dispatch(setVehicleBrands(brands));
    });
}
