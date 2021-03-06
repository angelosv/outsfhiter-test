import { combineReducers } from "redux";
import products from './products';
import settings from './settings';
import cartReducer from "./cart";
import authUser from './auth';
import order from './order'
// importar reducers de multilangual

//aqui importo reducers de cada funcionalidad

// aquí combino los reducers para el componentdidmount

const reducers = combineReducers({
    data: products,
    defaultvalues: settings,
    cartList: cartReducer,
    authUser: authUser,
    order: order
})

export default reducers