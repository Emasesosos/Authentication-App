import { types } from './../types/types';

export const getData = (email, password) => {

    return {
        type: types.GET_PROFILE_INFO,
        payload: {
            email,
            password
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