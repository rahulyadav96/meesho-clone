
const initialState = {
    status:false,
    token:"",
    user:{}
}

export const authReducer = (state=initialState, action)=>{
    switch(action.type){
        case LOGIN:
             return {...state, 
                status:true,
                token:action.payload.token,
                user:action.payload.user
            }
        case LOGOUT:
            return {...state,
                status:false,   
                token:"",
                user:{}, 
            }

        default:
            return state;
    }
}