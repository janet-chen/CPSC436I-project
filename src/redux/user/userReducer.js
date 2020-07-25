import {
    LOGIN_USER_SUCCESS,
    LOGOUT_USER_SUCCESS
} from './userTypes';

const initialState = {
    loading: false,
    signedIn: false,
    error: ''
};

const loginReducer = (state = initialState, action) => {
    console.log(action.type);
    switch (action.type) {
        case 'LOGIN_USER_REQUEST':
            return {
                ...state,
                loading: true
            }
        case LOGIN_USER_SUCCESS:
            console.log("Logged in");
            return {
                ...state,
                loading: false,
                signedIn: true,
                error: ''
            }
        case 'LOGIN_USER_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case 'LOGOUT_USER_REQUEST':
            return {
                ...state,
                loading: true
            }
        case LOGOUT_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                signedIn: false,
                error: ''
            }
        case 'LOGOUT_USER_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default: return state;
    }
};

export const userReducer = {
    user: loginReducer,
};
