
import axios from "axios";
import { API } from "../constants/apis";
import { UserDetails } from "../types/userDetails.type";


export const loginRequest = (user: UserDetails) => {
    
    return axios.post( API.LOGIN_API , user)
        .then((response: { data: any; }) => response.data)

}

export const getUsers = () => {
    
    return axios.get(API.LIST_USER_API)
                .then((res: { data: any; }) => res.data)
}
