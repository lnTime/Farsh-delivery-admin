import {openNotification} from '../../notification/notificationActions'
export const globalErrorHandler = (error) => (dispatch) => {
    console.dir('Error is: ', error);
    window.error = error;
    if (error.response.data.status === 500) {
        dispatch(openNotification({
            type: 'error',
            content: {
                title: 'Error',
                description: 'Something went wrong.',
            }
        }));
    }
}