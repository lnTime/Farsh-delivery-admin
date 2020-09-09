import { notificationConstants } from "./notificationConstants";

const initialState  = {
    open: false,
    type: 'success',
    content: null,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case notificationConstants.OPEN_NOTIFICATION:
            return {
                open: true,
                ...action.payload
            };
        case notificationConstants.CLOSE_NOTIFICATION:
            return {
                open: false,
                ...action.payload
            };
        default:
            return state;
    }
}