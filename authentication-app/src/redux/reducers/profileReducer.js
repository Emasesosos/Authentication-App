import { types } from './../types/types';

export function profileReducer(state = { name: 'Emmanuel Martínez' }, action) {

    switch (action.type) {

        case types.GET_PROFILE_INFO:
            return {
                profileInfo: action.payload.profileInfo
            }
        default:
            return state;

    }

}