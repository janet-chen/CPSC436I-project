import {
    LOGIN_USER_SUCCESS,
    LOGOUT_USER_SUCCESS
} from './userTypes';

export const userLogin = () => {
    return {
        type: LOGIN_USER_SUCCESS
    }
}

export const userLogout = () => {
    return {
        type: LOGOUT_USER_SUCCESS
    }
}