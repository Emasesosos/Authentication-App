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