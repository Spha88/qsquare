import * as types from '../actions/types';

const initialState = {
    name: null,
    number: null,
    email: null,
    subject: null,
    message: null,
    error: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_NAME:
            return {
                ...state,
                name: action.payload,
            };
        case types.ADD_NUMBER:
            return {
                ...state,
                number: action.payload,
            };
        case types.ADD_EMAIL:
            return {
                ...state,
                email: action.payload,
            };
        case types.ADD_SUBJECT:
            return {
                ...state,
                subject: action.payload,
            };
        case types.ADD_MESSAGE:
            return {
                ...state,
                message: action.payload,
            };
        default:
            return state;
    }
};
