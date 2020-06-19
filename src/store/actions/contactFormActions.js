import * as types from './types';

export const addName = name => dispatch => {
    console.log('AddName', name);
    dispatch({
        type: types.ADD_NAME,
        payload: name,
    });
};

export const addNumber = number => dispatch => {
    dispatch({
        type: types.ADD_NUMBER,
        payload: number,
    });
};

export const addEmail = email => dispatch => {
    dispatch({
        type: types.ADD_EMAIL,
        payload: email,
    });
};
export const addSubject = subject => dispatch => {
    dispatch({
        type: types.ADD_SUBJECT,
        payload: subject,
    });
};

export const addMessage = message => dispatch => {
    dispatch({
        type: types.ADD_MESSAGE,
        payload: message,
    });
};
