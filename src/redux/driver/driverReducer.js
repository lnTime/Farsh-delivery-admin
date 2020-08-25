import {driverConstants} from './driverConstants';

const initialState = null;
 export const driverReducer = (state = initialState, action) => {
    switch(action.type){
        case driverConstants.SET_DRIVER:
            return action.payload;
        case  driverConstants.EDIT_PROFILE :
            return {
                ...state ,
                profile:action.payload
            }
        case driverConstants.SET_VENDOR :
            return{
                ...state,
                vendor: action.payload
            }    
        case driverConstants.EDIT_REAL_NAME :
            return{
                ...state,
                realName:action.payload
            }   
        case driverConstants.EDIT_DRIVER_LICENSE :
            return{
                ...state,
                driverLicense:action.payload
            }
        case driverConstants.EDIT_VEHICLE :
            return{
                ...state,
                vehicle:action.payload
            }
        default : 
            return state
    }
}
