import Swal from "sweetalert2";
import { fetchSinToken, fetchConToken } from './../../helpers/fetch';
import { types } from './../types/types';
import { profileLogout } from "./profile";

// Inicio Login Usuario
export const startLogin = (email, password) => {

    return async(dispatch) => { // Thunk

        // console.log(email, password);
        const resp = await fetchSinToken('auth', { email, password }, 'POST');
        const body = await resp.json();
        // console.log(body);

        if (body.ok) {
            localStorage.setItem('token', body.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            dispatch(login({
                uid: body.uid,
                name: body.name
            }));
        } else {
            Swal.fire('Error', body.msg, 'error');
        }

    };

};

// Start Register
export const startRegister = (email, password) => {

    return async(dispatch) => { // Thunk

        const resp = await fetchSinToken('auth/new', { email, password }, 'POST');
        const body = await resp.json();
        console.log({body});

        if (body.ok) {
            localStorage.setItem('token', body.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            dispatch(login({
                uid: body.uid,
                name: body.name
            }));
        } else {
            Swal.fire('Error', body.msg, 'error');
        }

    };

};

// Start Checking
export const startChecking = () => {

    return async(dispatch) => {

        const resp = await fetchConToken('auth/renew');
        const body = await resp.json();
        // console.log(body);

        if (body.ok) {
            localStorage.setItem('token', body.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            dispatch(login({
                uid: body.uid,
                name: body.name
            }));
        } else {
            // Swal.fire('Error', body.msg, 'error');
            dispatch(checkingFinish());
        }

    };

};

// Login Usuario
const login = (user) => {

    return {
        type: types.AUTH_LOGIN,
        payload: user
    };

};

// Checking finish
const checkingFinish = () => {

    return {
        type: types.AUTH_CHECKING_FINISH
    };

};

// Start Logout
export const startLogout = () => {

    return (dispatch) => {
        localStorage.clear();
        dispatch(profileLogout());
        dispatch(logout());
    };

};

// Logout
const logout = () => {

    return {
        type: types.AUTH_LOGOUT,
    };

};

