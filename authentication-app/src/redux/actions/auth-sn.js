import Swal from "sweetalert2";
import { firebase, googleAuthProvider, twitterAuthProvider } from './../../firebase/firebase-config';
import { fetchSinToken, fetchSocialNet } from './../../helpers/fetch';
import { login } from './auth';

// Busqueda de usuario de Social Network
export const searchUserSn = (socialNetwork) => {

    return async(dispatch) => {

        let authSocialNetwork;

        if(socialNetwork === 'google') {
            authSocialNetwork = googleAuthProvider;
        } else if (socialNetwork === 'twitter') {
            authSocialNetwork = twitterAuthProvider;
        }

        firebase.auth().signInWithPopup(authSocialNetwork)
            .then(async({ user }) => {
                let emailFinal;
                if(socialNetwork === 'twitter') {
                    emailFinal = 'user@twitter.com';
                } else if(socialNetwork === 'google') {
                    emailFinal = user.email
                }
                user.password = '123456';
                const { password } = user;
                const resp = await fetchSocialNet('auth/searchUserSocialNet', { emailFinal }, 'GET');
                const body = await resp.json();
                if (body.ok) { // Login
                    dispatch(startGoogleLogin(emailFinal, password));
                } else { // Register
                    dispatch(startGoogleRegister(emailFinal, password));
                }
            });

        // firebase.auth().signInWithPopup(authSocialNetwork)
        // .then(async( userCred ) => {
        //     console.log(userCred);
        // });

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

// Inicio Login Twitter
export const startTwitterLogin = () => {

    return (dispatch) => {
        firebase.auth().signInWithPopup(twitterAuthProvider)
            .then(({ user }) => {
                dispatch(
                    login({
                        uid: user.uid,
                        name: user.displayName
                    })
                )
            });
    };

};