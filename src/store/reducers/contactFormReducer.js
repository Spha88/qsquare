import * as types from '../actions/types';

const initialState = {
    name: '',
    number: '',
    email: '',
    subject: '',
    message: '',
    error: false,
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
                error: checkError(),
            };
        case types.ADD_EMAIL:
            return {
                ...state,
                email: action.payload,
                error: checkError(),
            };
        case types.ADD_SUBJECT:
            return {
                ...state,
                subject: action.payload,
                error: checkError(),
            };
        case types.ADD_MESSAGE:
            return {
                ...state,
                message: action.payload,
                error: checkError(),
            };
        case types.SEND_MESSAGE:
            return {
                ...state,
                error: checkError(),
            };
        default:
            return state;
    }
};

const checkError = () => {
    let { name, number, email, message, subject } = initialState;
    if (
        name === '' ||
        number === '' ||
        email === '' ||
        message === '' ||
        subject === ''
    ) {
        return true;
    } else {
        return false;
    }
};
