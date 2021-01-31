import Swal from "sweetalert2";
import { firebase, googleAuthProvider } from './../../firebase/firebase-config';
import { fetchSinToken, fetchSocialNet } from './../../helpers/fetch';
import { login } from './auth';

// Busqueda de usuario de Social Network
export const searchUserSn = () => {

    return async(dispatch) => {

        firebase.auth().signInWithPopup(googleAuthProvider)
            .then(async({ user }) => {
                user.password = '123456';
                const { email, password } = user;
                const resp = await fetchSocialNet('auth/searchUserSocialNet', { email }, 'GET');
                const body = await resp.json();
                if (body.ok) { // Login
                    dispatch(startGoogleLogin(email, password));
                } else { // Register
                    dispatch(startGoogleRegister(email, password));
                }
            });

    };

};

// Start Register Google
export const startGoogleRegister = (email, password) => {

    return async(dispatch) => { // Thunk

        const resp = await fetchSinToken('auth/newSocialNet', { email, password }, 'POST');
        const body = await resp.json();

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

// Inicio Login Google
export const startGoogleLogin = (email, password) => {

    return async(dispatch) => {

        const resp = await fetchSinToken('auth/loginSocialNet', { email, password }, 'POST');
        const body = await resp.json();

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
