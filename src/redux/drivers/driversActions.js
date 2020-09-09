import { driversConstants } from "./driversConstants";
import { API } from "../../API";
import { batch } from "react-redux";
import { globalErrorHandler } from '../common/helpers/global-error-handler';

export const setDriverList = (drivers) => ({ type: driversConstants.SET_DRIVER_LIST, payload: drivers });

export const setDriversView = (drivers) => ({ type: driversConstants.SET_DRIVERS_VIEW, payload: drivers});

export const getDrivers = () => (dispatch, getState) => {
    const {pageNo, pageSize} = getState().drivers;
    API.get(`drivers/?pageInfo.pageNo=${pageNo}&pageInfo.pageSize=${pageSize}`)
    .then(({data}) => {
        batch(() => {
            dispatch(setDriverList(data.responseList));
            dispatch(setDriversView(data.responseList));
        })
    }).catch(err => dispatch(globalErrorHandler(err)));
}

export const searchDrivers = (keywords) => (dispatch, getState) => {
    const {pageNo, pageSize} = getState().drivers;
    API.get(`drivers/search?keywords=${keywords}&pageInfo.pageNo=${pageNo}&pageInfo.pageSize=${pageSize}`)
    .then(({data}) => {
        dispatch(setDriversView(data.responseList));
    }).catch(err => dispatch(globalErrorHandler(err)));
}