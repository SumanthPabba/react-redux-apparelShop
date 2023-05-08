import { combineReducers } from "redux";
import { productReducer, selectedProductReducer, cartReducer } from "./productReducer";

const reducers = combineReducers({
    allProducts: productReducer,
    // selectedProduct: selectedProductReducer,
    product: selectedProductReducer,
    cart: cartReducer,

})

export default reducers