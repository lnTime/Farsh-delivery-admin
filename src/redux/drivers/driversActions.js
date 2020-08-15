import { driversConstants } from "./driversConstants";
import { API } from "../../API";

export const setDrivers = (drivers) => ({ type: driversConstants.SET_DRIVERS, payload: drivers });

let currentPage = 0;

export const getDrivers = () => (dispatch) => {
    API.get(`drivers?pageNo=${currentPage}&pageSize=10`)
    .then(({data}) => {
        dispatch(setDrivers(data.responseList));
    });
}