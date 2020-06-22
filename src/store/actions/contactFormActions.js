import * as types from './types';
import axios from 'axios';

export const sendEmail = emailDetails => dispatch => {
    dispatch(sending());
    axios({
        method: 'post',
        url: 'form_handler.php',
        headers: { 'Content-type': 'application/json' },
        data: {
            name: emailDetails.name,
            email: emailDetails.email,
            message: emailDetails.message,
        },

    })
        .then(res => {
            dispatch({
                type: types.EMAIL_SENT,
            });
            console.log(res);
        })
        .catch(error => {
            dispatch({
                type: types.EMAIL_SENDING_FAILED,
            });
            console.log(error.message);
        });
};

export const sending = () => {
    return {
        type: types.SENDING_EMAIL,
    };
};
