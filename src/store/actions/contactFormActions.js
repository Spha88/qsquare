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
            number: emailDetails.number,
            email: emailDetails.email,
            subject: emailDetails.subject,
            message: emailDetails.message,
        },
    })
        .then(res => {
            dispatch({
                type: types.EMAIL_SENT,
            });
        })
        .catch(error => {
            dispatch({
                type: types.EMAIL_SENDING_FAILED,
            });
        });
};

export const sending = () => {
    return {
        type: types.SENDING_EMAIL,
    };
};
