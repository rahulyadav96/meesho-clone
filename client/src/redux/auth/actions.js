import {LOGIN,LOGOUT} from "./actionType";

export const loginUser = (payload) =>{
    return {
        type:LOGIN,
        payload
    }
}

export const logoutUser = () =>{

    return {
        type:LOGOUT,
    }
}