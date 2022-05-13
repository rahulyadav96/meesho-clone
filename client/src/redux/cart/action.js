import {UPDATE_PRODUCT, GET_PRODUCTS,DEL_PRODUCT,ADD_PRODUCT, PLACED } from "./actionType";

export const addProduct = (payload) =>{
    return {
        type:ADD_PRODUCT,
        payload
    }
}

export const getAllProducts = ()=>{
    return {
        type:GET_PRODUCTS,
        
    }
}

export const delProduct = (id)=>{
    return {
        type:DEL_PRODUCT,
        id
    }
}

export const placed = ()=>{
    return {
        type:PLACED
    }
}

export const updateProdut = (prod)=>{
    return {
        type:UPDATE_PRODUCT,
        prod
    }
}

// export const getSingleProduct = () =>{
//     return {
//         type:GET_SINGLE_PRODUCT,
//         payload,
//     }
// }