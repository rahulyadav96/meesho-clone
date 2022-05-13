import { ADD_PRODUCT, DEL_PRODUCT, GET_PRODUCTS, PLACED, UPDATE_PRODUCT } from "./actionType"

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
        case PLACED:
            return{
                ...state, products:[]
            }
        
        case UPDATE_PRODUCT:
            return{
                ...state, products:state.products.map(item=>{
                    if(item.id == action.prod.id) return action.prod;
                    else return item
                })
            }
        default:
            return state;

    }
}