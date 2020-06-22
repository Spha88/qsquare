import * as types from '../actions/types';

const initialState = {
    sending: false,
    emailSent: false,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.SENDING_EMAIL:
            return {
                ...state,
                sending: true,
                emailSent: false,
            };
        case types.EMAIL_SENT:
            return {
                ...state,
                sending: false,
                emailSent: true,
            };

        default:
            return state;
    }
};
