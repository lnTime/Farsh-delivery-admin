import {driverConstants} from './driverConstants';

const initialState = null;

 export const driverReducer = (state = initialState, action) => {
    switch(action.type){
        case driverConstants.SET_DRIVER:
            return action.payload;
        case  driverConstants.SET_PROFILE:
            return {
                ...state ,
                profile:action.payload
            }
        case driverConstants.SET_VENDOR :
            return {
                ...state,
                vendor: action.payload
            }
        case driverConstants.SET_PROFILE_AVATAR:
            return {
                ...state,
                profile: {
                    ...state.profile,
                    profileAvatar: action.payload
                }
            }
        case driverConstants.SET_REAL_NAME_INFORMATION :
            return {
                ...state,
                realNameInformation: action.payload
            }
        case driverConstants.SET_DRIVING_LICENSE :
            return {
                ...state,
                driverLicense:action.payload
            }
        case driverConstants.SET_VEHICLE_INFO :
            return{
                ...state,
                vehicle:action.payload
            }
        default :
            return state
    }
}
