import { ADD_PRODUCT, DEL_PRODUCT, GET_PRODUCTS } from "./actionType"

const initialState = {
    products:[]
}

export const prodReducer = (state = initialState,action) =>{
    switch(action.type){
        case ADD_PRODUCT:
            return {...state,products:[...state.products,action.payload]};

        case DEL_PRODUCT:
           
            return {
                ...state, products:state.products.filter(prod=>prod.id!=action.id)
            }
        default:
            return state;

    }
}