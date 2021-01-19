import Swal from "sweetalert2";
import { fetchSinToken } from './../../helpers/fetch';
import { types } from './../types/types';

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

// Login Usuario
const login = (user) => {

    return {
        type: types.AUTH_LOGIN,
        payload: user
    };

};