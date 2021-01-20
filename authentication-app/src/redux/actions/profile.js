import Swal from "sweetalert2";
import { fetchGetData, fetchUpdateProfile } from '../../helpers/fetch';
import { types } from './../types/types';

export const getData = (uid) => {

    return async(dispatch) => { // Thunk

        const resp = await fetchGetData('user', {uid}, 'GET');
        const body = await resp.json();

        if (body.ok) {
            dispatch(getProfile({
                id: body.usuario._id,
                imageUrl: body.usuario.imageUrl,
                name: body.usuario.name,
                bio: body.usuario.bio,
                phone: body.usuario.phone,
                email: body.usuario.email,
            }));
        } else {
            Swal.fire('Error', body.msg, 'error');
        }

    };

};

export const getOptionsProfileTrue = () => {

    return {
        type: types.GET_OPTIONS_PROFILE,
        payload: {
            optionProfile: true
        }
    };

};

export const getOptionsProfileFalse = () => {

    return {
        type: types.GET_OPTIONS_PROFILE,
        payload: {
            optionProfile: false
        }
    };

};

// User Logout
export const profileLogout = () => {

    return {
        type: types.PROFILE_LOGOUT
    };

};

// User Profile
const getProfile = (infoProfile) => {

    return {
        type: types.GET_PROFILE_INFO,
        payload: infoProfile
    }

};

// Update Info Profile
export const updateProfile = (infoProfile, uid) => {

    console.log('infoProfile: ', infoProfile);

    return async(dispatch) => { // Thunk

        const resp = await fetchUpdateProfile('user', infoProfile, uid, 'PUT');
        console.log(resp);
        // const body = await resp.json();

        // console.log('body: ', body);

        // console.log('body: ', body);
        // if (body.ok) {
        //     dispatch(getProfile({
        //         id: body.usuario._id,
        //         imageUrl: body.usuario.imageUrl,
        //         name: body.usuario.name,
        //         bio: body.usuario.bio,
        //         phone: body.usuario.phone,
        //         email: body.usuario.email,
        //     }));
        // } else {
        //     Swal.fire('Error', body.msg, 'error');
        // }

    }

};