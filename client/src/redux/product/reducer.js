import { ADD_PRODUCT, GET_PRODUCTS } from "./actionType"

const initialState = {
    products:[],
    signleProduct: {},
}

export const prodReducer = (state = initialState,action) =>{
    switch(action.type){
        case ADD_PRODUCT:
            return {...state,products:[...state.products,payload]};

        case GET_PRODUCTS:
            return {}
    }
}