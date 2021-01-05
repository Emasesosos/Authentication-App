import { types } from './../types/types';

const initialState = {
    name: '',
    bio: '',
    phone: '',
    email: '',
    password: ''
}

export function profileReducer(state = initialState, action) {

    switch (action.type) {

        case types.GET_PROFILE_INFO:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;

    }

}