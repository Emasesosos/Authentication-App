import { types } from './../types/types';

const initialState = {
    name: '',
    bio: '',
    phone: '',
    email: '',
    password: '',
    optionProfile: ''
}

export function profileReducer(state = initialState, action) {

    switch (action.type) {

        case types.GET_PROFILE_INFO:
            return {
                ...state,
                ...action.payload
            }
        case types.GET_OPTIONS_PROFILE: 
            return {
                ...state,
                ...action.payload
            }
        case types.PROFILE_LOGOUT: 
            return {
                ...initialState
            }
        default:
            return state;

    }

}