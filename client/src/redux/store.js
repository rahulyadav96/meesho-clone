import {createStore} from 'redux';
// import {authReducer} from './auth/reducer';
import {prodReducer} from  "./cart/reducer"
export const store = createStore(prodReducer);

