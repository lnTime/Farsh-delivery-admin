import staticConstants from "./staticConstants";

const initialState = {
  drivingLicense: {
    issuingAuthority: [],
    types: [],
  },
  realName: {
    issuingAuthority: [],

  },
  vehicle: {
    vehicleBrands: [],
    vehicleMakes: [],
    vehicleTypes: [],
  },
}

const staticReducer = (state = initialState, action) => {
  switch (action.type) {
    case staticConstants.STATIC_SET_DRIVING_LICENSE_ISSUING_AUTHORITY:
      return {
        ...state,
        drivingLicense: {
          ...state.drivingLicense,
          issuingAuthority: action.payload.issuingAuthority,
        },
      }
    case staticConstants.STATIC_SET_DRIVING_LICENSE_TYPES:
      return {
        ...state,
        drivingLicense: {
          ...state.drivingLicense,
          types: action.payload.types,
        }
      }
    case staticConstants.STATIC_REAL_NAME_ISSUING_AUTHORITY:
      return {
        ...state,
        realName: {
          ...state.realName,
          issuingAuthority: action.payload.issuingAuthority,
        }
      }
    case staticConstants.STATIC_VEHICLE_VEHICLE_BRANDS:
      return {
        ...state,
        vehicle: {
          ...state.vehicle,
          vehicleBrands: action.payload.vehicleBrands,
        }
      }
    case staticConstants.STATIC_VEHICLE_VEHICLE_MAKES:
      return {
        ...state,
        vehicle: {
          ...state.vehicle,
          vehicleMakes: action.payload.vehicleMakes,
        }
      }
    case staticConstants.STATIC_VEHICLE_VEHICLE_TYPES:
      return {
        ...state,
        vehicle: {
          ...state.vehicle,
          vehicleTypes: action.payload.vehicleTypes,
        }
      }
    default:
      return state;
  }
}

export default staticReducer;
