import { types } from './../types/types';

export const getData = (res) => {

    return {
        type: types.GET_PROFILE_INFO,
        payload: {
            profileInfo: res
        }
    };

};