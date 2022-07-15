import { constant } from "../constants/login.actions"

export const initialState = {
    username: '',
    token: '',
    error: '',
    loading: false,
    isLoggedIn: false
}

export const loginReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case constant.LOGIN_REQUEST:
            return {
                ...state,
                username: action.payload.email,
                loading: true
            }
        case constant.LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                token: action.payload,
                isLoggedIn: true
            }
        case constant.LOGIN_FAILURE:
            return {
                ...state,
                loading: false,
                username: '',
                error: action.payload
            }
        default:
            return state
    }
}