import { constant } from "../constants/login.actions"
import { UserDetails } from "../types/userDetails.type"

export const loginRequestAction = (payload: UserDetails) => {
    return {
        type: constant.LOGIN_REQUEST,
        payload
    }
}

export const loginSuccess = (payload: string) => {
    return {
        type: constant.LOGIN_SUCCESS,
        payload
    }
}

export const loginFailure = (payload: string) => {
    return {
        type: constant.LOGIN_FAILURE,
        payload
    }
}