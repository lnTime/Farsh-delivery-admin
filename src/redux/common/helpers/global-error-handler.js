import {openNotification} from '../../notification/notificationActions'
export const globalErrorHandler = (error) => (dispatch) => {
    dispatch(openNotification({
        type: 'error',
        content: {
            title: 'Error',
            description: 'Something went wrong.',
        }
    }));
}